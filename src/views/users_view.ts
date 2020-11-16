import User from '../model/Users'
import imagesView from './images_view'
export default {
    render(user: User) {
        return {
            name: user.name,
            email: user.email,
            images:imagesView.renderMany(user.images)
            //password: user.password,

        }
    },
    renderMany(users:User[]){
        return users.map(user=>this.render(user))
    }
}