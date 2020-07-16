import { HttpResponse } from '@/controllers/protocols/http'

export const ok = (data?:any):HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = ():HttpResponse => ({
  statusCode: 500,
  body: {
    message: 'Erro'
  }
})

export const badRequest = (error:Error):HttpResponse => ({
  statusCode: 400,
  body: {
    message: error
  }
})

export const created = (data?:any):HttpResponse => ({
  statusCode: 201,
  body: data
})
