import { HttpResponse } from '@/controllers/protocols/http'

import { MissingParamsError } from '../../helpers/errors/MissingParamsError'
import { badRequest } from './../../helpers/http'
import { Controller } from './../protocols/controller'
import { HttpRequest } from './../protocols/http'
import { IStoreToolRepository } from './../protocols/IStoreRepository'

export class StoreToolController implements Controller {
  constructor (storeToolRepository:IStoreToolRepository) {
    this.storeToolRepository = storeToolRepository
  }

  private storeToolRepository: IStoreToolRepository

  async handle (httpRequest:HttpRequest):Promise<HttpResponse> {
    const { title, link, description, tags } = httpRequest.body
    if (!title) return badRequest(new MissingParamsError('title'))
    if (!link) return badRequest(new MissingParamsError('link'))
    if (!description) return badRequest(new MissingParamsError('description'))
    if (!tags) return badRequest(new MissingParamsError('tags'))

    const { id } = await this.storeToolRepository.add({ title, link, description, tags })

    return {
      statusCode: 201,
      body: { id }
    }
  }
}
