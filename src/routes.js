import { Router } from 'express'

const routes = Router()

routes.get('/tools')
routes.get('/tools?tag')
routes.post('/tools')
routes.delete('/tools/:id')

export default routes
