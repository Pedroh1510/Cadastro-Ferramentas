import { ILoadTool, ITool } from '@/models/Tool'
import faker from 'faker'

import { IStoreToolRepository } from './../../protocols/IStoreRepository'

export class StoreToolRepositorySpy implements IStoreToolRepository {
  tool:ITool
  async add (tool:ITool):Promise<ILoadTool> {
    this.tool = tool
    return {
      id: faker.random.uuid(),
      ...tool
    }
  }
}
