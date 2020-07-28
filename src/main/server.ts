import { typeOrmHelper } from '../infra/db/typeOrm/typeOrmHelper/typeOrmHelper'
import app from './config/app'
import env from './config/env'

typeOrmHelper.connect()
  .then(async () => {
    app.listen(env.port, () => console.log(`Server running http://localhost:${env.port}`))
  })
  .catch(console.error)
