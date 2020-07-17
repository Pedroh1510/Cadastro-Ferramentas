import { IDestroyToolRepository } from './../../protocols/IDestroyToolRepository'

export class DestroyToolRepositorySpy implements IDestroyToolRepository {
  id:string
  async drop (id:string):Promise<void> {
    this.id = id
  }
}
