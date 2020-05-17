import mongo from 'mongoose'

import mongoConfig from '../../src/config/mongo'

describe('Conexão com banco de dados', () => {
  afterAll(() => {
    mongo.disconnect()
  })
  test('Deve se conectar ao banco', async () => {
    console.log(mongoConfig.url)
    const response = await mongo
      .connect(mongoConfig.url, mongoConfig.options)
      .then(() => 'Conectado')
      .catch(() => 'Erro')

    expect(response).toEqual('Conectado')
  })
})
