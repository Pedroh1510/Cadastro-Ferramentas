import mongo from 'mongoose'

import mongoConfig from '../../src/config/mongo'

describe('Conexão com banco de dados', () => {
  test('Deve se conectar', async () => {
    const response = await mongo
      .connect(mongoConfig.url, mongoConfig.options)
      .then(() => 'Conectado')
      .catch(() => 'Erro')

    expect(response).toEqual('Conectado')
  })
})
