interface HttpRequest{
  body?: any
  headers?: any
  params?: any
  query?: any
}
interface HttpResponse{
  statusCode:number
  body?:any
}

interface Controller{
  handle(httpRequest:HttpRequest):Promise<HttpResponse>
}

const makeSut = () => {
  class IndexToolController implements Controller {
    async handle ():Promise<HttpResponse> {
      return {
        statusCode: 200,
        body: {}
      }
    }
  }
  const sut = new IndexToolController()
  return {
    sut
  }
}

describe('Index Tool Controller', () => {
  test('Retorna 200 e a lista de usuários', async () => {
    const { sut } = makeSut()
    const response = await sut.handle()
    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({})
  })
})
