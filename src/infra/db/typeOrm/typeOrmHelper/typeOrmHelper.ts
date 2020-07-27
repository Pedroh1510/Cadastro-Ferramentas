import { createConnection, Connection } from 'typeorm'

import { TagsEntity } from './entity/TagsEntity'
import { ToolsEntity } from './entity/ToolsEntity'

class TypeOrmHelper {
  private client: Connection
  private table: string
  isConnected: boolean

  async connect () {
    this.client = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME || 'POSTGRES_USER',
      password: process.env.DB_PASSWORD || 'POSTGRES_PASSWORD',
      entities: [ToolsEntity, TagsEntity],
      synchronize: true
    })
    this.isConnected = this.client.isConnected
  }

  async disconnect () {
    this.client.close()
    this.client = null
    this.isConnected = null
  }

  async get () {
    return await this.client.getRepository(ToolsEntity).find()
  }

  async add (data) {
    const result = await this.client.manager.save(data)
    return result
  }
}

export const typeOrmHelper = new TypeOrmHelper()
