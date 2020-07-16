import { ILoadTool } from '@/models/Tool'
import faker from 'faker'

import { IIndexToolRepository } from './../../protocols/IIndexRepository'

export class IndexToolRepositorySpy implements IIndexToolRepository {
  async get ():Promise<ILoadTool[]> {
    return [{
      id: faker.random.uuid(),
      title: faker.random.words(5),
      link: faker.internet.url(),
      description: faker.random.words(20),
      tags: faker.random.words(20).split(' ')
    }]
  }
}
