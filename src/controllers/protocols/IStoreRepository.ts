import { ILoadTool, ITool } from '@/models/Tool'

export interface IStoreToolRepository{
  add(tool:ITool):Promise<ILoadTool>
}
