import mongo from 'mongoose'

import mongoConfig from '../config/mongo'

mongo
  .connect(mongoConfig.url, mongoConfig.options)
  .then(() => console.log('Conectado com o mongo'))
  .catch(() => console.log('Erro ao conectar com o mongo'))

export default mongo
