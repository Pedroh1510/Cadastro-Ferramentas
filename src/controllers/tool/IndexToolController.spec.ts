import faker from 'faker'

import { IIndexToolRepository } from './../protocols/IIndexRepository'
import { IndexToolController } from './IndexToolController'

const makeSut = () => {
  class IndexToolRepositorySpy implements IIndexToolRepository {
    async get () {
      return [{
        id: faker.random.uuid(),
        title: faker.random.words(5),
        link: faker.internet.url(),
        description: faker.random.words(20),
        tags: faker.random.words(20).split(' ')
      }]
    }
  }
  const indexToolRepository = new IndexToolRepositorySpy()
  const sut = new IndexToolController(indexToolRepository)
  return {
    sut,
    indexToolRepository
  }
}

const throwError = () => {
  throw new Error()
}

describe('Index Tool Controller', () => {
  test('Retorna 200 e a lista de usuários', async () => {
    const { sut } = makeSut()
    const response = await sut.handle()
    expect(response.statusCode).toEqual(200)
    expect(Array.isArray(response.body)).toEqual(true)
  })
  test('Retorna 500 se o IndexToolRepository tiver uma exceção', async () => {
    const { sut, indexToolRepository } = makeSut()
    jest.spyOn(indexToolRepository, 'get').mockImplementationOnce(throwError)
    const response = await sut.handle()
    expect(response.statusCode).toEqual(500)
  })
})
