import { HttpResponse } from '@/controllers/protocols/http'

export const ok = (data?:any):HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = ():HttpResponse => ({
  statusCode: 500,
  body: 'Error'
})
