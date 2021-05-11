import express, { response } from 'express'
import { request } from 'node:https'

const application=express()

const isOrderHaddPaid=(request,response,next)=> {
    console.log('Payment Verifed ')
    next()

}
application.use(isOrderHaddPaid)

application.get('/order',(request,response)=>
{
    response.send('Order is created :'+Math.random())
})

const notFound=(request,response,next)=>{
    const error=new Error('Not Found: ${request.orgnilaUrl}')
    response.status(404)
    next(error)
}
application.use(notFound)

application.listen(3001,()=> {
    console.log('Ther serve is up ans ronning on port 3001')
})