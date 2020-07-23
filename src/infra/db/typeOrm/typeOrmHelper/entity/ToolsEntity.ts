import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from 'typeorm'

import { TagsEntity } from './tagsEntity'

@Entity()
export class ToolsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    link: string;

    @OneToMany(type => TagsEntity, tag => tag.tool)
    tags:TagsEntity[]
}
