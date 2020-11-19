import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm'

import Users from './Users'
@Entity('villages')
export default class Villages {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    latitude: string

    @Column()
    longitude: string

    @Column()
    continente: string

    @ManyToOne(() => Users, user => user.village)
    @JoinColumn({ name: 'user_id' })
    user: Users
} 