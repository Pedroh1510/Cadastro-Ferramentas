import { HttpResponse } from '@/controllers/protocols/http'

import { MissingParamsError } from '../../helpers/errors/MissingParamsError'
import { badRequest } from './../../helpers/http'
import { Controller } from './../protocols/controller'
import { HttpRequest } from './../protocols/http'

export class StoreToolController implements Controller {
  async handle (httpRequest:HttpRequest):Promise<HttpResponse> {
    const { title, link } = httpRequest.body
    if (!title) return badRequest(new MissingParamsError('title'))
    if (!link) return badRequest(new MissingParamsError('link'))
  }
}
