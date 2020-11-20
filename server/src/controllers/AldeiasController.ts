import { getRepository } from "typeorm"
import { Request, Response } from 'express'
import Aldeias from "../model/Villages"
import aldeiasView from '../views/aldeias_view'


export default {
    async index(request: Request, response: Response) {
        const aldeiaRep = getRepository(Aldeias)
        const aldeias = await aldeiaRep.find({
            relations: ['user']
        })
        // console.log(aldeias)
        return response.json(aldeiasView.renderMany(aldeias))
    },
    async show(request: Request, response: Response) {
        const { id } = request.params
        const aldeiaRep = getRepository(Aldeias)
        const aldeia = await aldeiaRep.findOneOrFail(id, {
            relations: ['user']
        })
        //console.log(aldeia)
        return response.json(aldeiasView.render(aldeia))
    },
    async create(request: Request, response: Response) {

        const { name, latitude, longitude, continente, user } = request.body
        const aldeiaRep = getRepository(Aldeias)
        //console.log(name, latitude, longitude, continente)

        // console.log(images)
        const aldeia = aldeiaRep.create({
            name,
            latitude,
            longitude,
            continente,
            user


        })
        await aldeiaRep.save(aldeia)

        return response.status(201).json({ aldeia })


    },


    ////////////////

    async update(request: Request, response: Response) {

        const { name,
            latitude,
            longitude,
            continente,
            user
        } = request.body
        const aldeiaRep = getRepository(Aldeias)

        // console.log(images)
        const aldeia = aldeiaRep.update(request.params.id, {

            name,
            latitude,
            longitude,
            continente,
            user

        })
        const updatedAldeia = await aldeiaRep.findOne(request.params.id)
        // console.log(name, email, password)
        return response.send(updatedAldeia);

    }
    ////////////////
}