export interface IDestroyToolRepository{
  drop(id:string):Promise<void>
}
