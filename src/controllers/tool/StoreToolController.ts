import { HttpResponse } from '@/controllers/protocols/http'

import { MissingParamsError } from '../../helpers/errors/MissingParamsError'
import { badRequest } from './../../helpers/http'
import { Controller } from './../protocols/controller'
import { HttpRequest } from './../protocols/http'

export class StoreToolController implements Controller {
  async handle (httpRequest:HttpRequest):Promise<HttpResponse> {
    const { title, link, description, tags } = httpRequest.body
    if (!title) return badRequest(new MissingParamsError('title'))
    if (!link) return badRequest(new MissingParamsError('link'))
    if (!description) return badRequest(new MissingParamsError('description'))
    if (!tags) return badRequest(new MissingParamsError('tags'))
  }
}
