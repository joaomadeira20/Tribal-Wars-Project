import Aldeias from '../model/Aldeias'
import Users from '../model/Users'
import imagesView from './images_view'
import users_view from './users_view'
export default {
    render(aldeia: Aldeias) {
        console.log(aldeia)
        return {
            id: aldeia.id,
            name: aldeia.name,
            latitude: aldeia.latitude,
            longitude: aldeia.longitude,
            continente: aldeia.continente,
            username: aldeia.user.name,
            user: {
                id: aldeia.user.id,

                email: aldeia.user.email
            }

        }
    },

    renderMany(aldeias: Aldeias[]) {
        return aldeias.map(aldeia => this.render(aldeia))
    }
}