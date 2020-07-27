import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

import { ToolsEntity } from './ToolsEntity'

@Entity()
export class TagsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @ManyToOne(() => ToolsEntity, toolEntity => toolEntity.tags, { cascade: true })
    tool: ToolsEntity
}
