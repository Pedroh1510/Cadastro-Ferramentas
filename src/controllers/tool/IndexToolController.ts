import { Controller } from './../protocols/controller'
import { HttpResponse } from './../protocols/http'
import { IIndexToolRepository } from './../protocols/IIndexRepository'

export class IndexToolController implements Controller {
  constructor (indexToolRepository: IIndexToolRepository) {
    this.indexToolRepository = indexToolRepository
  }

  private indexToolRepository: IIndexToolRepository

  async handle (): Promise<HttpResponse> {
    try {
      const tools = await this.indexToolRepository.get()
      return {
        statusCode: 200,
        body: tools
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: 'Error'
      }
    }
  }
}
