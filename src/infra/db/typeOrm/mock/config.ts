import { resolve } from 'path'
import { ConnectionOptions } from 'typeorm'

import { TagsEntity } from './../typeOrmHelper/entity/TagsEntity'
import { ToolsEntity } from './../typeOrmHelper/entity/ToolsEntity'

export const configConnection:ConnectionOptions = {
  type: 'sqljs',
  location: resolve('data', 'SQL'),
  dropSchema: true,
  entities: [ToolsEntity, TagsEntity],
  synchronize: true
}
