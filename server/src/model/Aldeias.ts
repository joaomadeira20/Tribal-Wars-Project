import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm'

import User from './Users'
@Entity('aldeias')
export default class Aldeias {
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

    @ManyToOne(() => User, user => user.aldeias)
    @JoinColumn({ name: 'user_id' })
    user: User
} 