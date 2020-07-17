import { serverError, ok, badRequest } from '../../helpers/http'
import { MissingParamsError } from './../../helpers/errors/MissingParamsError'
import { Controller } from './../protocols/controller'
import { HttpResponse, HttpRequest } from './../protocols/http'
import { IShowToolRepository } from './../protocols/IShowToolRepository'

export class ShowToolController implements Controller {
  constructor (showToolRepository:IShowToolRepository) {
    this.showToolRepository = showToolRepository
  }

  showToolRepository:IShowToolRepository
  async handle (httpRequest:HttpRequest):Promise<HttpResponse> {
    try {
      const { tag } = httpRequest.query
      if (!tag) return badRequest(new MissingParamsError('tag'))
      const tools = await this.showToolRepository.filter(tag)
      return ok(tools)
    } catch (error) {
      return serverError()
    }
  }
}
