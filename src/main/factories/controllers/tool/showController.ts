import { Controller } from '@/controllers/protocols/controller'
import { ShowToolController } from '@/controllers/tool/ShowToolController'
import { ToolRepository } from '@/infra/db/mongodb/ToolRepository'

export const makeShowToolController = ():Controller => {
  const repository = new ToolRepository()
  const controller = new ShowToolController(repository)
  return controller
}
