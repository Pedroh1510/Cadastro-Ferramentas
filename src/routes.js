import { Router } from 'express'

import ToolValidator from './app/validators/ToolValidator'

const routes = Router()

routes.get('/tools')
routes.get('/tools?tag')
routes.post('/tools', ToolValidator.store)
routes.delete('/tools/:id')

export default routes
