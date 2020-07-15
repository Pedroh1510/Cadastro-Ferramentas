import { Controller } from './../protocols/controller'
import { HttpResponse } from './../protocols/http'

export class IndexToolController implements Controller {
  async handle (): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: {}
    }
  }
}
