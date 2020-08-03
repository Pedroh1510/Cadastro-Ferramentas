import { typeOrmHelper } from '../infra/db/typeOrm/typeOrmHelper/typeOrmHelper'
import app from './config/app'
import env from './config/env'
import { makeConfigConnection } from './factories/db/connection'

typeOrmHelper.connect(makeConfigConnection(env.configConnection))
  .then(async () => {
    app.listen(env.port, () => console.log(`Server running http://localhost:${env.port}`))
  })
  .catch(console.error)
