import { ILoadTool } from '@/models/Tool'

export interface IIndexToolRepository{
  get():Promise<ILoadTool[]>
}
