import { IndexToolController } from './IndexToolController'

const makeSut = () => {
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
    expect(response.body).toEqual([])
  })
})
