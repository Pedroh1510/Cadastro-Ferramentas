import { fakerTool } from './../../../utils/fakerTool'
import { ToolRepository } from './ToolRepository'
import { ToolsEntity } from './typeOrmHelper/entity/ToolsEntity'
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
  beforeEach(async () => {
    await typeOrmHelper.clear()
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
  describe('GetTool', () => {
    test('Retorna uma lista com todas as tool', async () => {
      const { sut } = makeSut()
      const tool = fakerTool()
      await sut.add(tool)
      const response = await sut.get()
      expect(Array.isArray(response)).toBeTruthy()
      expect(response[0].title).toEqual(tool.title)
      expect(response[0].description).toEqual(tool.description)
      expect(response[0].link).toEqual(tool.link)
      expect(response[0].tags).toEqual(tool.tags)
    })
  })
})
