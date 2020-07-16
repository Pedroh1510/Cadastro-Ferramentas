import { ILoadTool, ITool } from '@/models/Tool'
import faker from 'faker'

import { IStoreToolRepository } from './../../protocols/IStoreRepository'

export class StoreToolRepositorySpy implements IStoreToolRepository {
  async add (tool:ITool):Promise<ILoadTool> {
    return {
      id: faker.random.uuid(),
      ...tool
    }
  }
}
