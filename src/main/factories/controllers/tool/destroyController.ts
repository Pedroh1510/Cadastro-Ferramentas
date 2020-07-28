import { Controller } from '@/controllers/protocols/controller'

import { DestroyToolController } from './../../../../controllers/tool/DestroyToolController'
import { ToolRepository } from './../../../../infra/db/typeOrm/ToolRepository'

export const makeDestroyToolController = ():Controller => {
  const repository = new ToolRepository()
  const controller = new DestroyToolController(repository)
  return controller
}
