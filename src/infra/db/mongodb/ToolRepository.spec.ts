import { Collection } from 'mongodb'

import { fakerTool } from './../../../utils/fakerTool'
import { mongoHelper } from './mongoHelper/mongoHelper'
import { ToolRepository } from './ToolRepository'

let toolCollection:Collection

const makeSut = () => {
  const sut = new ToolRepository()
  return {
    sut
  }
}

describe('ToolRepository', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
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
  describe('GetTool', () => {
    test('Retorna todas as tools', async () => {
      const { sut } = makeSut()
      const tool = fakerTool()
      await sut.add(tool)
      const response = await sut.get()
      expect(Array.isArray(response)).toBeTruthy()
      expect(response[0].id).toBeTruthy()
      expect(response[0].title).toEqual(tool.title)
      expect(response[0].link).toEqual(tool.link)
      expect(response[0].tags).toEqual(tool.tags)
      expect(response[0].description).toEqual(tool.description)
    })
  })
  describe('DestroyTool', () => {
    test('Deleta a Tool com o fornecido id', async () => {
      const { sut } = makeSut()
      const tool = fakerTool()
      const { id } = await sut.add(tool)
      await sut.drop(id)

      const response = await sut.get()
      expect(response).toEqual([])
    })
  })
  describe('ShowTool', () => {
    test('Retorna as tools com a tag informada', async () => {
      const { sut } = makeSut()
      const tool = await sut.add(fakerTool())
      const response = await sut.filter(tool.tags[0])
      expect(response[0]).toEqual(tool)
    })
  })
})
