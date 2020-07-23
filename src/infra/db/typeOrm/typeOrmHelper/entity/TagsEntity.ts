import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

import { ToolsEntity } from './ToolsEntity'

@Entity()
export class TagsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @ManyToOne(type => ToolsEntity, tool => tool.tags)
    tool: ToolsEntity
}
