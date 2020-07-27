import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { TagsEntity } from './TagsEntity'

@Entity()
export class ToolsEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    link: string;

    @OneToMany(() => TagsEntity, tagsEntity => tagsEntity.tool)
    tags:TagsEntity[]
}
