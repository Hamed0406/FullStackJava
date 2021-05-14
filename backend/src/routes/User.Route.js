import UserController from '../controller/User.controller.js'

const routes=application=> {

    application.post('/user',UserController.createUser)
    application.get('/user',UserController.getAllUsers)
    application.get('/user/:userId',UserController.getUserById)

}

export default {routes}
