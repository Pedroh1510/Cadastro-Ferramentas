import { TagsEntity } from './../../infra/db/typeOrm/typeOrmHelper/entity/TagsEntity'
import { ToolsEntity } from './../../infra/db/typeOrm/typeOrmHelper/entity/ToolsEntity'
import { makeConfigConnection } from './../factories/db/connection'
import 'dotenv/config'

export default {
  port: process.env.PORT || 3333,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/cadastro-ferramentas',
  configConnection: makeConfigConnection({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME || 'POSTGRES_USER',
    password: process.env.DB_PASSWORD || 'POSTGRES_PASSWORD',
    entities: [ToolsEntity, TagsEntity],
    synchronize: true
  })
}
