import request from 'supertest'

import { ToolRepository } from '../../infra/db/typeOrm/ToolRepository'
import { typeOrmHelper } from '../../infra/db/typeOrm/typeOrmHelper/typeOrmHelper'
import { fakerTool } from '../../utils/fakerTool'
import app from '../config/app'
import env from '../config/env'

describe('Tool Route', () => {
  beforeAll(async () => {
    await typeOrmHelper.connect()
  })
  afterAll(async () => {
    await typeOrmHelper.disconnect()
  })
  beforeEach(async () => {
    await typeOrmHelper.clear()
  })
  describe('GET /tools', () => {
    test('Retorna 200 e a lista de tools', async () => {
      const tool = fakerTool()
      const repository = new ToolRepository()
      await repository.add(tool)
      const response = await request(app)
        .get('/tools')
      expect(response.status).toEqual(200)
      expect(response.body[0].id).toBeTruthy()
      expect(response.body[0].title).toEqual(tool.title)
      expect(response.body[0].description).toEqual(tool.description)
      expect(response.body[0].link).toEqual(tool.link)
      expect(response.body[0].tags).toEqual(tool.tags)
    })
  })
  describe('GET /tools?tag=', () => {
    test('Retorna 200 e a lista de tools com a tag', async () => {
      const tool = fakerTool()
      const repository = new ToolRepository()
      await repository.add(tool)
      const response = await request(app)
        .get(`/tools?tag=${tool.tags[0]}`)
      expect(response.status).toEqual(200)
      expect(response.body[0].id).toBeTruthy()
      expect(response.body[0].title).toEqual(tool.title)
      expect(response.body[0].description).toEqual(tool.description)
      expect(response.body[0].link).toEqual(tool.link)
      expect(response.body[0].tags).toEqual(tool.tags)
      expect(response.body.length).toEqual(1)
    })
  })
  describe('POST /tools', () => {
    test('Retorna 201 ao cadastrar a ferramenta', async () => {
      const response = await request(app)
        .post('/tools')
        .send({
          title: fakerTool().title,
          description: fakerTool().description,
          link: fakerTool().link,
          tags: fakerTool().tags
        })
      expect(response.status).toEqual(201)
      expect(response.body.id).toBeTruthy()
    })
  })
  describe('DELETE /tools', () => {
    test('Retorna 204 ao deletar a ferramenta', async () => {
      const tool = fakerTool()
      const repository = new ToolRepository()
      const { id } = await repository.add(tool)
      const response = await request(app)
        .delete(`/tools/${id}`)
      expect(response.status).toEqual(204)
    })
  })
})
