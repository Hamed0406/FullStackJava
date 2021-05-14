import express from 'express'
import morgan from 'morgan'
import UserRoute from './src/routes/User.Route.js'
import Configoration from './src/configurations/Configoration.js'
import Midelwares from './src/midelwares/Midelwares.js'


const application=express()
application.use(express.json())
application.use(morgan('common'))

 

UserRoute.routes(application)


application.use(Midelwares.notFound)
Configoration.connectToPort(application)
Configoration.connetToDB()
