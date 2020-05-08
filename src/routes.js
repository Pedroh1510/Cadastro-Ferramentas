import { Router } from 'express'

import ToolController from './app/controllers/ToolController'
import ToolValidator from './app/validators/ToolValidator'

const routes = Router()

routes.get('/tools', ToolController.index)
routes.get('/tools?tag')
routes.post('/tools', ToolValidator.store, ToolController.store)
routes.delete('/tools/:id')

export default routes
