import { ILoadTool } from './../../../models/Tool'
import { fakerLoadTools } from './../../../utils/fakerTool'
import { IShowToolRepository } from './../../protocols/IShowToolRepository'

export class ShowToolRepositorySpy implements IShowToolRepository {
  tools:ILoadTool[] = [
    fakerLoadTools()
  ]

  tag:string
  async filter (tag:string):Promise<ILoadTool[]> {
    this.tag = tag
    return this.tools
  }
}
