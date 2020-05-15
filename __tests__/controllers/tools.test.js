import request from 'supertest'

import app from '../../src/app'

const toolRegister = {
  title: 'hotel',
  link: 'https://github.com/typicode/hotel',
  description: 'Local app manager',
  tags: ['node', 'organizing', 'webapps', 'domain', 'developer', 'https', 'proxy']
}

describe('Verifica ToolController', () => {
  describe('Verifica a rota get /tools, sem query', () => {
    test('Retorna 200', async () => {
      const response = await request(app).get('/tools').send()

      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
    })
  })
  describe('Verifica a rota post /tools', () => {
    test('Deve haver uma rota para cadastrar uma nova ferramenta', async () => {
      const response = await request(app).post('/tools').send(toolRegister)

      expect(response.status).toBe(201)
      expect(response.body.title).toEqual(toolRegister.title)
      expect(response.body.link).toEqual(toolRegister.link)
      expect(response.body.description).toEqual(toolRegister.description)
      expect(response.body.tags).toEqual(toolRegister.tags)
      expect(typeof response.body._id).toBe('string')
    })
    test('Deve retornar erro quando não fornecer title', async () => {
      const toolTest = {
        link: 'https://github.com/typicode/hotel',
        description: 'Local app manager',
        tags: ['node', 'proxy']
      }
      const response = await request(app).post('/tools').send(toolTest)

      expect(response.status).toBe(400)
      expect(response.body.message).toEqual('"title" is required')
    })
    test('Deve retornar erro quando não fornecer link', async () => {
      const toolTest = {
        title: 'hotel',
        description: 'Local app manager',
        tags: ['node', 'proxy']
      }
      const response = await request(app).post('/tools').send(toolTest)

      expect(response.status).toBe(400)
      expect(response.body.message).toEqual('"link" is required')
    })
    test('Deve retornar erro quando não fornecer description', async () => {
      const toolTest = {
        title: 'hotel',
        link: 'https://github.com/typicode/hotel',
        tags: ['node', 'proxy']
      }
      const response = await request(app).post('/tools').send(toolTest)

      expect(response.status).toBe(400)
      expect(response.body.message).toEqual('"description" is required')
    })
    test('Deve retornar erro quando não fornecer tags', async () => {
      const toolTest = {
        title: 'hotel',
        link: 'https://github.com/typicode/hotel',
        description: 'Local app manager'
      }
      const response = await request(app).post('/tools').send(toolTest)

      expect(response.status).toBe(400)
      expect(response.body.message).toEqual('"tags" is required')
    })
    test('Deve retornar erro quando tags não for array', async () => {
      const toolTest = {
        title: 'hotel',
        link: 'https://github.com/typicode/hotel',
        description: 'Local app manager',
        tags: 'node'
      }
      const response = await request(app).post('/tools').send(toolTest)

      expect(response.status).toBe(400)
      expect(response.body.message).toEqual('"tags" must be an array')
    })
  })
})
