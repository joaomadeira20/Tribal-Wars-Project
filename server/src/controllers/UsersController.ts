import { getRepository } from "typeorm"
import { Request, Response } from 'express'
import Users from "../model/Users"
import userView from '../views/users_view'
import users_view from "../views/users_view"

export default {
    async index(request: Request, response: Response) {
        const usersRepository = getRepository(Users)
        const users = await usersRepository.find({
            relations: ['images']
        })
        return response.json(users_view.renderMany(users))
    },
    async show(request: Request, response: Response) {
        const { id } = request.params
        const usersRepository = getRepository(Users)
        const user = await usersRepository.findOneOrFail(id, {
            relations: ['images']
        })
        return response.json(userView.render(user))
    },
    async create(request: Request, response: Response) {

        const { name, email, password } = request.body
        const usersRepository = getRepository(Users)
        
        const requestImages = request.files as Express.Multer.File[]
        const images = requestImages.map(image => {
            return { path: image.filename }
        })
        // console.log(images)
        const user = usersRepository.create({
            name,
            email,
            password,
            images
        })
        await usersRepository.save(user)
 
        return response.status(201).json({ user })


    },


    ////////////////

    async update(request: Request, response: Response) {
        console.log('oii')
        console.log(request.body, request.params.id, request.query)
        const { name, email, password } = request.body
        const usersRepository = getRepository(Users)


        // console.log(images)
        const user = usersRepository.update(request.params.id, {

            name,
            email,
            password,

        })
        const updatedUser = await usersRepository.findOne(request.params.id)
        // console.log(name, email, password)
       return  response.send(updatedUser);

    }
    ////////////////
}