import { Router } from 'express'

import ToolController from './app/controllers/ToolController'
import ToolValidator from './app/validators/ToolValidator'

const routes = Router()

routes.get('/tools?', ToolController.show)
routes.get('/tools', ToolController.index)
routes.post('/tools', ToolValidator.store, ToolController.store)
routes.delete('/tools/:id')

export default routes
