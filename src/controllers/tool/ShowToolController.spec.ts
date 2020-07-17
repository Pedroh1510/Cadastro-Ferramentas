import { ShowToolRepositorySpy } from './mocks/ShowToolRepositorySpy'
import { ShowToolController } from './ShowToolController'

const makeRequest = () => ({
  query: { tag: 'python' }
})

const makeSut = () => {
  const showToolRepositorySpy = new ShowToolRepositorySpy()
  const sut = new ShowToolController(showToolRepositorySpy)
  return {
    sut,
    showToolRepositorySpy
  }
}

describe('ShowToolController', () => {
  test('Chama o ShowToolRepository com o param correto', async () => {
    const { sut, showToolRepositorySpy } = makeSut()
    const httpRequest = makeRequest()
    await sut.handle(httpRequest)
    expect(showToolRepositorySpy.tag).toEqual(httpRequest.query.tag)
  })
})
