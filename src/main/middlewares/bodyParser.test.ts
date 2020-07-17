import request from 'supertest'

import app from '../config/app'

describe('Body parser', () => {
  test('Parse Body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })

    const response = await request(app)
      .post('/test_body_parser')
      .send({ name: 'Pedro' })
    expect(response.body).toEqual({ name: 'Pedro' })
  })
})
