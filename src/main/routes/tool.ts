import { Router } from 'express'

import { adaptMiddleware } from './../adapters/adaptMiddleware'
import { adaptRoute } from './../adapters/adaptRoutes'
import { makeDestroyToolController } from './../factories/controllers/tool/destroyController'
import { makeIndexToolController } from './../factories/controllers/tool/indexController'
import { makeShowToolController } from './../factories/controllers/tool/showController'
import { makeStoreToolController } from './../factories/controllers/tool/storeController'

export default (router:Router):void => {
  router.get('/tools',
    adaptMiddleware(makeShowToolController()),
    adaptRoute(makeIndexToolController())
  )
  router.post('/tools', adaptRoute(makeStoreToolController()))
  router.delete('/tools/:id', adaptRoute(makeDestroyToolController()))
}
