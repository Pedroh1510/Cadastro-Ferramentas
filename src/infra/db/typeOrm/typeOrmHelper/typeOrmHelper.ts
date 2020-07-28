import { createConnection, Connection, getConnection } from 'typeorm'

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
      synchronize: true,
      dropSchema: true
    })
    this.isConnected = this.client.isConnected
  }

  async connection () {
    this.client = await getConnection()
    return this.client
  }

  async clear () {
    const connection = await getConnection()
    const entities = connection.entityMetadatas

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name)
      await repository.query(`DELETE FROM ${entity.tableName}`)
    })
  }

  async disconnect () {
    this.client.close()
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
