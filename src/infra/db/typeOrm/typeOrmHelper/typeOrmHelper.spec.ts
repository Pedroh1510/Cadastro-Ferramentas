import { typeOrmHelper } from './typeOrmHelper'

describe('Type Orm Helper', () => {
  beforeAll(async () => {
    await typeOrmHelper.connect()
  })
  afterAll(async () => {
    await typeOrmHelper.disconnect()
  })
  test('Garante que se conectou', async () => {
    expect(typeOrmHelper.isConnected).toBeTruthy()
  })
})
