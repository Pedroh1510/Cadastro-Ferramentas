import faker from 'faker'

import { DestroyToolController } from './DestroyToolController'
import { DestroyToolRepositorySpy } from './mocks/DestroyToolRepositorySpy'

const makeRequest = () => ({
  params: {
    id: faker.random.uuid()
  }
})

const makeSut = () => {
  const destroyToolRepositorySpy = new DestroyToolRepositorySpy()
  const sut = new DestroyToolController(destroyToolRepositorySpy)
  return {
    sut,
    destroyToolRepositorySpy
  }
}

describe('DestroyToolController', () => {
  test('Chama o DestroyToolRepository com o param correto', async () => {
    const { sut, destroyToolRepositorySpy } = makeSut()
    const httpRequest = makeRequest()
    await sut.handle(httpRequest)
    expect(destroyToolRepositorySpy.id).toEqual(httpRequest.params.id)
  })
})
