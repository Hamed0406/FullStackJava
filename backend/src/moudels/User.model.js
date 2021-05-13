import mongoose from 'mongoose'

const {Schema}=mongoose

const userSchema=Schema({
    username: {
        type:String,
        unique : true,
        allowNull:false,
        require:true,
        lowercase: true,
        minlength: [5,'User name most be atleast 5 characters.']

    },
    password : {
        type:String,
        allowNull:false,
        require:true
    }
})

const UserModel=mongoose.model('user',userSchema)
export default UserModel