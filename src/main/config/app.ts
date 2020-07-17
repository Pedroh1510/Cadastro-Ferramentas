import express from 'express'

import SetupMiddleware from './middlewares'
import SetupRoute from './routes'

const app = express()

SetupMiddleware(app)
SetupRoute(app)

export default app
