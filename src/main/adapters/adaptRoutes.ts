import { Controller } from '@/controllers/protocols/controller'
import { HttpRequest } from '@/controllers/protocols/http'
import { Request, Response } from 'express'

export const adaptRoute = (controller:Controller) => {
  return async (req:Request, res:Response):Promise<Response> => {
    const httpRequest:HttpRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers,
      query: req.query
    }
    const httpResponse = await controller.handle(httpRequest)
    return res.status(httpResponse.statusCode).send(httpResponse.body)
  }
}
