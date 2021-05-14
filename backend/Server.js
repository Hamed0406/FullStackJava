import express from 'express'
import morgan from 'morgan'
import UserRoute from './src/routes/User.Route.js'
import Configoration from './src/configurations/Configoration.js'


const application=express()
application.use(express.json())
application.use(morgan('common'))

 

UserRoute.routes(application)

const notFound=(request,response,next)=>{
    const error=new Error(`Not Found: ${request.orgnilaUrl}`)
    response.status(404)
    next(error)
}
application.use(notFound)
Configoration.connectToPort(application)
Configoration.connetToDB()
