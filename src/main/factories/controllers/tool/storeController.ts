import { Controller } from '@/controllers/protocols/controller'

import { StoreToolController } from './../../../../controllers/tool/StoreToolController'
import { ToolRepository } from './../../../../infra/db/mongodb/ToolRepository'

export const makeStoreToolController = ():Controller => {
  const repository = new ToolRepository()
  const controller = new StoreToolController(repository)
  return controller
}
