import { MissingParamsError } from './../../helpers/errors/MissingParamsError'
import { ShowToolRepositorySpy } from './mocks/ShowToolRepositorySpy'
import { throwError } from './mocks/ThrowError'
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
  test('Retorna 400 se não houver tag', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      query: {}
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(400)
    expect(response.body.message).toEqual(new MissingParamsError('tag'))
  })
  test('Chama o ShowToolRepository com o param correto', async () => {
    const { sut, showToolRepositorySpy } = makeSut()
    const httpRequest = makeRequest()
    await sut.handle(httpRequest)
    expect(showToolRepositorySpy.tag).toEqual(httpRequest.query.tag)
  })
  test('Retorna 500 se ShowToolRepository tiver uma exceção', async () => {
    const { sut, showToolRepositorySpy } = makeSut()
    jest.spyOn(showToolRepositorySpy, 'filter').mockImplementationOnce(throwError)
    const httpRequest = makeRequest()
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(500)
  })
  test('Retorna 200 e a lista de tool encontradas', async () => {
    const { sut, showToolRepositorySpy } = makeSut()
    const httpRequest = makeRequest()
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(200)
    expect(Array.isArray(response.body)).toEqual(true)
    expect(response.body).toEqual(showToolRepositorySpy.tools)
  })
})
