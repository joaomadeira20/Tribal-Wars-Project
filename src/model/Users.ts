import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm'
import Images from './Images'
import Aldeias from './Aldeias'
@Entity('users')
export default class Users {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(()=>Images, image=>image.user,{
        cascade:['insert', 'update']
    })
    @JoinColumn({name:'user_id'})
    images: Images[]

    // @ManyToOne(()=>Aldeias, aldeia=>aldeia.users)
    // @JoinColumn({name:'user_id'})
    // aldeias: Aldeias

    @OneToMany(()=>Aldeias, aldeia=>aldeia.user,{
        cascade:['insert', 'update']
    })
    @JoinColumn({name:'user_id'})
    aldeias: Aldeias[]

    
}