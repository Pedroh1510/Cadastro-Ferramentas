import { MissingParamsError } from './../../helpers/errors/MissingParamsError'
import { fakerTool } from './../../utils/fakerTool'
import { StoreToolRepositorySpy } from './mocks/StoreToolRepositorySpy'
import { throwError } from './mocks/ThrowError'
import { StoreToolController } from './StoreToolController'

const makeRequest = () => ({
  body: fakerTool()
})

const makeSut = () => {
  const storeToolRepositorySpy = new StoreToolRepositorySpy()
  const sut = new StoreToolController(storeToolRepositorySpy)
  return {
    sut,
    storeToolRepositorySpy
  }
}

describe('Store Tool Controller', () => {
  test('Retorna 400 se title não for enviado', async () => {
    const { sut } = makeSut()
    const { description, tags, link } = makeRequest().body
    const httpRequest = {
      body: {
        description,
        tags,
        link
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(400)
    expect(response.body.message).toEqual(new MissingParamsError('title'))
  })
  test('Retorna 400 se link não for enviado', async () => {
    const { sut } = makeSut()
    const { description, tags, title } = makeRequest().body
    const httpRequest = {
      body: {
        description,
        tags,
        title
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(400)
    expect(response.body.message).toEqual(new MissingParamsError('link'))
  })
  test('Retorna 400 se description não for enviado', async () => {
    const { sut } = makeSut()
    const { link, tags, title } = makeRequest().body
    const httpRequest = {
      body: {
        link,
        tags,
        title
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(400)
    expect(response.body.message).toEqual(new MissingParamsError('description'))
  })
  test('Retorna 400 se tags não for enviado', async () => {
    const { sut } = makeSut()
    const { link, description, title } = makeRequest().body
    const httpRequest = {
      body: {
        link,
        description,
        title
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(400)
    expect(response.body.message).toEqual(new MissingParamsError('tags'))
  })
  test('Chama StoreToolRepository com o param correto', async () => {
    const { sut, storeToolRepositorySpy } = makeSut()
    const httpRequest = makeRequest()
    await sut.handle(httpRequest)
    expect(storeToolRepositorySpy.tool).toEqual(httpRequest.body)
  })
  test('Retorna 201 e o id da tool cadastrada', async () => {
    const { sut } = makeSut()
    const httpRequest = makeRequest()
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(201)
    expect(response.body.id).toBeTruthy()
  })
  test('Retorna 500 se StoreToolRepository tiver uma exceção', async () => {
    const { sut, storeToolRepositorySpy } = makeSut()
    jest.spyOn(storeToolRepositorySpy, 'add').mockImplementationOnce(throwError)
    const httpRequest = makeRequest()
    const response = await sut.handle(httpRequest)
    expect(response.statusCode).toEqual(500)
  })
})
