import './config/dotenv'
import { errors } from 'celebrate'
import express from 'express'
import mongo from 'mongoose'

import mongoConfig from './config/mongo'
import routes from './routes'

class App {
  constructor() {
    this.express = express()

    this.middleware()
    this.database()
    this.routes()
    this.celebrateErrors()
  }

  middleware() {
    this.express.use(express.json())
  }

  database() {
    mongo.connect(mongoConfig.url, mongoConfig.options)
  }

  routes() {
    this.express.use(routes)
  }

  celebrateErrors() {
    this.express.use(errors())
  }
}

export default new App().express
