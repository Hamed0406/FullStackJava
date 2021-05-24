import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import UserRoute from './src/routes/User.Route.js'
import Configoration from './src/configurations/Configoration.js'
import Midelwares from './src/midelwares/Midelwares.js'

//Keep warpper Structed 
const application=express()
application.use(express.json())
application.use(morgan('common'))
application.use(helmet())
UserRoute.routes(application)
application.use(Midelwares.notFound)
Configoration.connectToPort(application)
Configoration.connetToDB()

export default application