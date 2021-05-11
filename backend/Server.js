const express =require('express')

const application=express()

application.listen(3001,()=> {
    console.log('Ther serve is up ans ronning on port 3001')
})