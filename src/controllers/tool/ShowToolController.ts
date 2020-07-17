import { serverError, ok } from './../../helpers/http'
import { Controller } from './../protocols/controller'
import { HttpResponse, HttpRequest } from './../protocols/http'
import { IShowToolRepository } from './../protocols/IShowToolRepository'

export class ShowToolController implements Controller {
  constructor (showToolRepository:IShowToolRepository, next:any) {
    this.showToolRepository = showToolRepository
    this.next = next
  }

  next:any
  showToolRepository:IShowToolRepository
  async handle (httpRequest:HttpRequest):Promise<HttpResponse> {
    try {
      const { tag } = httpRequest.query
      if (!tag) this.next.next()
      const tools = await this.showToolRepository.filter(tag)
      return ok(tools)
    } catch (error) {
      return serverError()
    }
  }
}
