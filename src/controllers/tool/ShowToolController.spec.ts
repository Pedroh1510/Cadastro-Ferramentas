import { ShowToolRepositorySpy } from './mocks/ShowToolRepositorySpy'
import { ShowToolController } from './ShowToolController'

const makeRequest = () => ({
  query: { tag: 'python' }
})

const makeSut = () => {
  class NextSpy {
    set=0
    next () {
      this.set++
    }
  }
  const next = new NextSpy()
  const showToolRepositorySpy = new ShowToolRepositorySpy()
  const sut = new ShowToolController(showToolRepositorySpy, next)
  return {
    sut,
    showToolRepositorySpy,
    next
  }
}

describe('ShowToolController', () => {
  test('Chama next() se não houver tag', async () => {
    const { sut, next } = makeSut()
    const httpRequest = {
      query: {}
    }
    await sut.handle(httpRequest)
    expect(next.set).toEqual(1)
  })
  test('Chama o ShowToolRepository com o param correto', async () => {
    const { sut, showToolRepositorySpy } = makeSut()
    const httpRequest = makeRequest()
    await sut.handle(httpRequest)
    expect(showToolRepositorySpy.tag).toEqual(httpRequest.query.tag)
  })
})
