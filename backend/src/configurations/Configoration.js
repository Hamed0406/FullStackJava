import dotenv from 'dotenv'
import mongoose from 'mongoose'


dotenv.config()
const {PORT,DEV_DATABASE_URL,ENVIROMENT,PROD_DATABASE_URL}=process.env
const connectToPort= async(application)=>
{
try{
    await application.listen(PORT,()=>{
        console.log(` Ther serve is up ans ronning on port :${PORT}`)

    })

}catch(error)
{
console.log('X Error occourd while trying to conncet to the poer....')
}
}


const connetToDB= async()=>
{
    const DATABASE_URL=ENVIROMENT=== 'DEVELOPMENT' ? DEV_DATABASE_URL : PROD_DATABASE_URL
    
try{
    await mongoose.connect(DATABASE_URL,{ useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true})
    console.log('Sucesssfully concetet to DB')

}catch(error)
{
    console.log('X Error occourd while trying to conncet to DB....')
    process.exit()

}

}

export default {
    connectToPort,connetToDB
}

