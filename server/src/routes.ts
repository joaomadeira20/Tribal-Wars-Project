import { getRepository } from 'typeorm'
import { Router } from 'express'
import UsersController from './controllers/UsersController'
import multer from 'multer'
import config from './config/upload'
import AldeiasController from './controllers/AldeiasController'
const routes = Router()
const upload = multer(config)

routes.post('/users', upload.array('images'), UsersController.create)
routes.get('/users', UsersController.index)
routes.get('/users/:id', UsersController.show)
routes.put('/user/update/:id', upload.array('images'), UsersController.update)

routes.post('/aldeias', upload.array('images'), AldeiasController.create)
routes.get('/aldeias', AldeiasController.index)
routes.get('/aldeias/:id', AldeiasController.show)
routes.put('/aldeias/update/:id', upload.array('images'), AldeiasController.update)



export default routes