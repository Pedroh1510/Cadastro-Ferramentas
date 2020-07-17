import express from 'express'

import SetupMiddleware from './middlewares'

const app = express()

SetupMiddleware(app)

export default app
