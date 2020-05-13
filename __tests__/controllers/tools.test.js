import request from 'supertest'

import app from '../../src/app'

describe('Verifica ToolController', () => {
  describe('Verifica a rota Lista de ferramentas', () => {
    test('Retorna 200', async () => {
      const response = await request(app).get('/tools').send()

      console.log(response.body)

      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
    })
  })
})
