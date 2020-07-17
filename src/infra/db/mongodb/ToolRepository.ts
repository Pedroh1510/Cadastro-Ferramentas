import { IStoreToolRepository, IIndexToolRepository, IDestroyToolRepository } from '@/controllers/protocols'
import { ILoadTool, ITool } from '@/models/Tool'

import { mongoHelper } from './mongoHelper/mongoHelper'

export class ToolRepository implements
  IStoreToolRepository,
  IIndexToolRepository,
  IDestroyToolRepository {
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

  async drop (id:string):Promise<void> {
    const toolCollection = await mongoHelper.getCollection('tool')
    await toolCollection.deleteOne({ _id: id })
  }
}
