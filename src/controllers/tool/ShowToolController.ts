import { Controller } from './../protocols/controller'
import { HttpResponse, HttpRequest } from './../protocols/http'
import { IShowToolRepository } from './../protocols/IShowToolRepository'

export class ShowToolController implements Controller {
  constructor (showToolRepository:IShowToolRepository) {
    this.showToolRepository = showToolRepository
  }

  showToolRepository:IShowToolRepository
  async handle (httpRequest:HttpRequest):Promise<HttpResponse> {
    const { tag } = httpRequest.query
    await this.showToolRepository.filter(tag)
    return { statusCode: 400 }
  }
}
