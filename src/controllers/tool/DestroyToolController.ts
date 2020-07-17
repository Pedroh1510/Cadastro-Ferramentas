import { Controller } from './../protocols/controller'
import { HttpRequest, HttpResponse } from './../protocols/http'
import { IDestroyToolRepository } from './../protocols/IDestroyToolRepository'

export class DestroyToolController implements Controller {
  constructor (destroyToolRepository:IDestroyToolRepository) {
    this.destroyToolRepository = destroyToolRepository
  }

  private destroyToolRepository:IDestroyToolRepository
  async handle (httpRequest:HttpRequest):Promise<HttpResponse> {
    const { id } = httpRequest.params
    await this.destroyToolRepository.drop(id)
    return {
      statusCode: 200
    }
  }
}
