import 'dotenv/config'

export default {
  port: process.env.PORT || 3333,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/cadastro-ferramentas'
}
