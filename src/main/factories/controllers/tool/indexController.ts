import { Controller } from '@/controllers/protocols/controller'
import { IndexToolController } from '@/controllers/tool/IndexToolController'
import { ToolRepository } from '@/infra/db/mongodb/ToolRepository'

export const makeIndexToolController = ():Controller => {
  const repository = new ToolRepository()
  const controller = new IndexToolController(repository)
  return controller
}
