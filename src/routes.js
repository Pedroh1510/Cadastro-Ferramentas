import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'

import ToolController from './app/controllers/ToolController'
import ToolValidator from './app/validators/ToolValidator'
import openApiDocumentation from './config/openapi'

const routes = Router()

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation))
routes.get('/tools', ToolController.show, ToolController.index)
routes.post('/tools', ToolValidator.store, ToolController.store)
routes.delete('/tools/:id', ToolController.destroy)

routes.get('/', function (req, res) {
  res.redirect('/api-docs')
})

export default routes
