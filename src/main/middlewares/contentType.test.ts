import request from 'supertest'

import app from '../config/app'

describe('Content Type Middleware', () => {
  test('Should return default content type as json', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send('')
    })
    const response = await request(app)
      .get('/test_content_type')

    expect(response.header['content-type']).toContain('json')
  })

  test('Should return xml content type when forced', async () => {
    app.get('/test_content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })
    const response = await request(app)
      .get('/test_content_type_xml')

    expect(response.header['content-type']).toContain('xml')
  })
})
