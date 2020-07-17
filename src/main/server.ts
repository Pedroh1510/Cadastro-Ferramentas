import { mongoHelper } from '@/infra/db/mongodb/mongoHelper/mongoHelper'

import app from './config/app'
import env from './config/env'

mongoHelper.connect(env.mongoUrl)
  .then(async () => {
    app.listen(env.port, () => console.log(`Server running http://localhost:${env.port}`))
  })
  .catch(console.error)
