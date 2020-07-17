import { Collection } from 'mongodb'
import request from 'supertest'

import { mongoHelper } from '../../infra/db/mongodb/mongoHelper/mongoHelper'
import { fakerTool } from '../../utils/fakerTool'
import app from '../config/app'
import env from '../config/env'

let toolCollection: Collection

describe('Tool Route', () => {
  beforeAll(async () => {
    await mongoHelper.connect(env.mongoUrl)
  })
  afterAll(async () => {
    await mongoHelper.disconnect()
  })
  beforeEach(async () => {
    toolCollection = await mongoHelper.getCollection('tool')
    await toolCollection.deleteMany({})
  })
  describe('GET /tools', () => {
    test('Retorna 200 e a lista de tools', async () => {
      const tool = fakerTool()
      await toolCollection.insertOne(tool)
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
      let tool = fakerTool()
      await toolCollection.insertOne(tool)
      tool = fakerTool()
      await toolCollection.insertOne(tool)
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
})
