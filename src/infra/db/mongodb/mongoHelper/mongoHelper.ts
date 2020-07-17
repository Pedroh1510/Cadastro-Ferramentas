import { MongoClient, Collection } from 'mongodb'

class MongoHelper {
  private client:MongoClient
  private uri:string
  async connect (uri:string):Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  async disconnect ():Promise<void> {
    await this.client.close()
    this.client = null
  }

  async getCollection (table:string):Promise<Collection> {
    if (!this.client?.isConnected()) await this.connect(this.uri)
    const collection = this.client.db().collection(table)
    return collection
  }

  map (data:any):any {
    const { _id, ...rest } = data
    return Object.assign({}, rest, { id: _id })
  }

  arrayMap (data:any):any {
    const content = data.map(tool => {
      const { _id, ...rest } = tool
      return Object.assign({}, rest, { id: _id })
    })
    return content
  }
}

export const mongoHelper = new MongoHelper()
