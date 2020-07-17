import { IStoreToolRepository, IIndexToolRepository } from '@/controllers/protocols'
import { ILoadTool, ITool } from '@/models/Tool'

import { mongoHelper } from './mongoHelper/mongoHelper'

export class ToolRepository implements
  IStoreToolRepository,
  IIndexToolRepository {
  async add (tool:ITool):Promise<ILoadTool> {
    const toolCollection = await mongoHelper.getCollection('tool')
    const registeredTool = await toolCollection.insertOne(tool)

    return registeredTool.ops[0] && mongoHelper.map(registeredTool.ops[0])
  }

  async get ():Promise<ILoadTool[]> {
    const toolCollection = await mongoHelper.getCollection('tool')
    const tools = await toolCollection.find().toArray()

    return tools && mongoHelper.arrayMap(tools)
  }
}
