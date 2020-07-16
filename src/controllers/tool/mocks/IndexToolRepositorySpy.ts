import { ILoadTool } from '@/models/Tool'
import faker from 'faker'

import { fakerTool } from './../../../utils/fakerTool'
import { IIndexToolRepository } from './../../protocols/IIndexRepository'

export class IndexToolRepositorySpy implements IIndexToolRepository {
  async get ():Promise<ILoadTool[]> {
    const { title, link, description, tags } = fakerTool()
    return [{
      id: faker.random.uuid(),
      title,
      link,
      description,
      tags
    }]
  }
}
