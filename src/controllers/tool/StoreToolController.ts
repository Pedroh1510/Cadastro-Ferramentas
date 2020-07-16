import { HttpResponse } from '@/controllers/protocols/http'

import { Controller } from './../protocols/controller'
import { HttpRequest } from './../protocols/http'

export class StoreToolController implements Controller {
  async handle (httpRequest:HttpRequest):Promise<HttpResponse> {
    return {
      statusCode: 400
    }
  }
}
