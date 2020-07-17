import faker from 'faker'

import { DestroyToolController } from './DestroyToolController'
import { DestroyToolRepositorySpy } from './mocks/DestroyToolRepositorySpy'
import { throwError } from './mocks/ThrowError'

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
  test('Retorna 500 se DestroyToolRepository tiver uma exceção', async () => {
    const { sut, destroyToolRepositorySpy } = makeSut()
    jest.spyOn(destroyToolRepositorySpy, 'drop').mockImplementationOnce(throwError)
    const httpRequest = makeRequest()
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(500)
  })
  test('Retorna 204 ao deletar a Tool informada', async () => {
    const { sut } = makeSut()
    const httpRequest = makeRequest()
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(204)
  })
})
