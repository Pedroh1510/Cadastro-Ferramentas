import { createConnection, Connection, getConnection, ConnectionOptions } from 'typeorm'

import { ToolsEntity } from './entity/ToolsEntity'

class TypeOrmHelper {
  private client: Connection
  private table: string
  isConnected: boolean

  async connect (options:ConnectionOptions) {
    this.client = await createConnection(options)
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

  async add (data) {
    const result = await this.client.manager.save(data)
    return result
  }
}

export const typeOrmHelper = new TypeOrmHelper()
