import { IStoreToolRepository } from '@/controllers/protocols/IStoreRepository'
import { ITool, ILoadTool } from '@/models/Tool'

import { TagsEntity } from './typeOrmHelper/entity/TagsEntity'
import { ToolsEntity } from './typeOrmHelper/entity/ToolsEntity'
import { typeOrmHelper } from './typeOrmHelper/typeOrmHelper'

export class ToolRepository implements IStoreToolRepository {
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
}
