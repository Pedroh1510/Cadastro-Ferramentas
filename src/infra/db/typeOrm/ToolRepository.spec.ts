import { fakerTool } from './../../../utils/fakerTool'
import { ToolRepository } from './ToolRepository'
import { typeOrmHelper } from './typeOrmHelper/typeOrmHelper'

const makeSut = () => {
  const sut = new ToolRepository()
  return {
    sut
  }
}

describe('Tool Repository typeOrm', () => {
  beforeAll(async () => {
    await typeOrmHelper.connect()
  })
  afterAll(async () => {
    await typeOrmHelper.disconnect()
  })
  describe('StoreTool', () => {
    test('Retorna o id e a tool quando cadastrado com sucesso', async () => {
      const { sut } = makeSut()
      const tool = fakerTool()
      const response = await sut.add(tool)
      expect(response.id).toBeTruthy()
      expect(response.description).toEqual(tool.description)
      expect(response.link).toEqual(tool.link)
      expect(response.title).toEqual(tool.title)
      expect(response.tags).toEqual(tool.tags)
    })
  })
})
