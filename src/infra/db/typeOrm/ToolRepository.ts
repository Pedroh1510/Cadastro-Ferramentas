import { IDestroyToolRepository } from '@/controllers/protocols/IDestroyToolRepository'
import { IIndexToolRepository } from '@/controllers/protocols/IIndexRepository'
import { IShowToolRepository } from '@/controllers/protocols/IShowToolRepository'
import { IStoreToolRepository } from '@/controllers/protocols/IStoreRepository'
import { ITool, ILoadTool } from '@/models/Tool'

import { TagsEntity } from './typeOrmHelper/entity/TagsEntity'
import { ToolsEntity } from './typeOrmHelper/entity/ToolsEntity'
import { typeOrmHelper } from './typeOrmHelper/typeOrmHelper'

const refactorToolsEntityInTool = (toolsEntity:ToolsEntity[]) => {
  const tools = toolsEntity.map(toolEntity => {
    const { id, title, description, link } = toolEntity
    const tags = toolEntity.tags.map(tag => tag.name)

    return {
      id, title, description, link, tags
    }
  })
  return tools
}

export class ToolRepository implements
  IStoreToolRepository,
  IIndexToolRepository,
  IShowToolRepository,
  IDestroyToolRepository {
  async add (tool:ITool):Promise<ILoadTool> {
    const tags = tool.tags.map(async tag => {
      const tagEntity = new TagsEntity()
      tagEntity.name = tag
      await typeOrmHelper.add(tagEntity)
      return tagEntity
    })
    const tagsEntity = await Promise.all(tags)

    const toolEntity = new ToolsEntity()
    toolEntity.title = tool.title
    toolEntity.description = tool.description
    toolEntity.link = tool.link
    toolEntity.tags = tagsEntity
    const { id } = await typeOrmHelper.add(toolEntity)

    return {
      id,
      ...tool
    }
  }

  async get ():Promise<ILoadTool[]> {
    const connection = await typeOrmHelper.connection()
    const toolsEntity = await connection.getRepository(ToolsEntity)
      .createQueryBuilder('tools_entity')
      .leftJoinAndSelect('tools_entity.tags', 'tags_entity')
      .getMany()

    const tools = refactorToolsEntityInTool(toolsEntity)

    return tools
  }

  async filter (tag:string):Promise<ILoadTool[]> {
    const connection = await typeOrmHelper.connection()
    const entity = await connection.getRepository(ToolsEntity)
    const toolsEntityWithTag = await entity
      .createQueryBuilder('tools_entity')
      .leftJoinAndSelect('tools_entity.tags', 'tags_entity')
      .where('tags_entity.name = :tag', { tag })
      .getMany()

    const idsToolsEntity = toolsEntityWithTag.map(tag => tag.id)
    const toolsEntity = await entity
      .createQueryBuilder('tools_entity')
      .leftJoinAndSelect('tools_entity.tags', 'tags_entity')
      .whereInIds(idsToolsEntity)
      .getMany()

    const tools = refactorToolsEntityInTool(toolsEntity)

    return tools
  }

  async drop (id:string):Promise<void> {
    const connection = await typeOrmHelper.connection()
    const entity = connection.getRepository(ToolsEntity)
    const tool = await entity.findOne(id)
    await entity.remove(tool)
  }
}
