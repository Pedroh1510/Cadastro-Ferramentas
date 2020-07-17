import { Collection } from 'mongodb'

import { fakerTool } from './../../../utils/fakerTool'
import { mongoHelper } from './mongoHelper/mongoHelper'
import { ToolRepository } from './ToolRepository'
import 'dotenv/config'

let toolCollection:Collection

const makeSut = () => {
  const sut = new ToolRepository()
  return {
    sut
  }
}

describe('ToolRepository', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL_TEST)
  })
  afterAll(async () => {
    await mongoHelper.disconnect()
  })
  beforeEach(async () => {
    toolCollection = await mongoHelper.getCollection('tool')
    await toolCollection.deleteMany({})
  })
  describe('StoreTool', () => {
    test('Retorna o id e a tool quando cadastrado com sucesso', async () => {
      const { sut } = makeSut()
      const tool = fakerTool()
      const response = await sut.add(tool)
      expect(response.id).toBeTruthy()
      expect(response.title).toEqual(tool.title)
      expect(response.link).toEqual(tool.link)
      expect(response.tags).toEqual(tool.tags)
      expect(response.description).toEqual(tool.description)
    })
  })
})
