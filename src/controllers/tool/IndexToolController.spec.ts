import { IndexToolController } from './IndexToolController'
import { IndexToolRepositorySpy } from './mocks/IndexToolRepositorySpy'
import { throwError } from './mocks/ThrownError'

const makeSut = () => {
  const indexToolRepository = new IndexToolRepositorySpy()
  const sut = new IndexToolController(indexToolRepository)
  return {
    sut,
    indexToolRepository
  }
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
