import { Controller } from '@/controllers/protocols/controller'
import { HttpRequest } from '@/controllers/protocols/http'
import { Request, Response, NextFunction } from 'express'

export const adaptMiddleware = (middleware:Controller) => {
  return async (req:Request, res:Response, next: NextFunction):Promise<Response> => {
    const httpRequest:HttpRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers,
      query: req.query
    }
    if (Object.keys(httpRequest.query).length) {
      const httpResponse = await middleware.handle(httpRequest)
      return res.status(httpResponse.statusCode).send(httpResponse.body)
    }
    next()
  }
}
