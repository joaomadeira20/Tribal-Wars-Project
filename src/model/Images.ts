import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import User from './Users'
@Entity('images')
export default class Images {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string

    @ManyToOne(()=>User, user=>user.images)
    @JoinColumn({name:'user_id'})
    user: User
    
}