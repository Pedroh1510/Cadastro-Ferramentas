import { mongoHelper } from './mongoHelper'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await mongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await mongoHelper.disconnect()
  })
  test('Reconecta se MongoDb fechar', async () => {
    let toolCollection = await mongoHelper.getCollection('tool')
    expect(toolCollection).toBeTruthy()
    await mongoHelper.disconnect()
    toolCollection = await mongoHelper.getCollection('tool')
    expect(toolCollection).toBeTruthy()
  })
})
