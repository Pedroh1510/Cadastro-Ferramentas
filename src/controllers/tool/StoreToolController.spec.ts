import { MissingParamsError } from './../../helpers/errors/MissingParamsError'
import { fakerTool } from './../../utils/fakerTool'
import { StoreToolController } from './StoreToolController'

const makeRequest = () => ({
  body: fakerTool()
})

const makeSut = () => {
  const sut = new StoreToolController()
  return {
    sut
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
})
