import UserController from '../controller/User.controller.js'

const routes=application=> {

    application.post('/user',UserController.createUser)


}

export default {routes}
