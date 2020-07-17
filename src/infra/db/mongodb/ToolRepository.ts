import { IStoreToolRepository } from '@/controllers/protocols/IStoreRepository'
import { ILoadTool, ITool } from '@/models/Tool'

import { mongoHelper } from './mongoHelper/mongoHelper'

export class ToolRepository implements IStoreToolRepository {
  async add (tool:ITool):Promise<ILoadTool> {
    const toolCollection = await mongoHelper.getCollection('tool')
    const registeredTool = await toolCollection.insertOne(tool)

    return registeredTool.ops[0] && mongoHelper.map(registeredTool.ops[0])
  }
}
