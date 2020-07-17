import { ILoadTool } from '@/models/Tool'

export interface IShowToolRepository{
  filter(tag:string):Promise<ILoadTool[]>
}
