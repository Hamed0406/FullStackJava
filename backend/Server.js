import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const {PORT}=process.env

const application=express()
application.use(morgan('common'))


application.get('/order',(request,response)=>
{
    response.send('Order is created :'+Math.random())
}) 

const notFound=(request,response,next)=>{
    const error=new Error(`Not Found: ${request.orgnilaUrl}`)
    response.status(404)
    next(error)
}
application.use(notFound)

application.listen(PORT,()=> {
    console.log(` Ther serve is up ans ronning on port :${PORT}`)
})

mongoose.connect('mongodb://localhost/my_database',{ useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true})
.then(()=>console.log('Sucesssfully concetet to DB'))
.catch((error)=> {
    console.log('Error had been coured to connect to DB :'+error)
    process.exit()
})