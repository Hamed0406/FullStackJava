import UserModel from '../moudels/User.model.js'
import StatusCode from '../configurations/StatusCode.js'

const createUser= async (request,response)=> {
const user=new UserModel({
    
    username:request.body.username ,
    password:request.body.password
})

try{
    const databaseResponse=await user.save()
    response.status(StatusCode.CREATED).send(databaseResponse)

}
catch(error)
{
response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message })
}
}

const getAllUsers= async (request,response)=> {
try
{
    const databaseResponse=await UserModel.find()
    response.status(StatusCode.OK).send(databaseResponse)
}
catch(error)
{
response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
}

}


const getUserById=async (request,response)=> {
    try
    {
        const databaseResponse=await UserModel.findOne({_id:request.params.userId})
        response.status(StatusCode.OK).send(databaseResponse)
    }
    catch(error)
    {
    response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
    
    }


    const deleteUserById=async (request,response)=> {
        try
        {
            const databaseResponse=await UserModel.findByIdAndDelete({_id:request.params.userId})
            response.status(StatusCode.OK).send(databaseResponse)
        }
        catch(error)
        {
        response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
        }
        
        }

        const updateUser=async (request,response)=> {
            const data={
                username:request.body.username,
                password: request.body.password

            }
            try
            {
                const databaseResponse=await UserModel.findOneAndUpdate(request.params.userId,data)
                response.status(StatusCode.OK).send(databaseResponse)
            }
            catch(error)
            {
            response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
            }
            
            }


            const getUserByQuery=async (request,response)=> {
                
                try
                {
                    const databaseResponse=await UserModel.find({username:request.query.username})
                    databaseResponse.length !=0 
                    ? response.status(StatusCode.OK).send(databaseResponse)
                    : response.status(StatusCode.NOT_FOUND).send({message: `Could not find user : ${request.query.username}` })

                }
                catch(error)
                {
                response.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
                }
                
                }
    
    

export default {
    createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUser,
    getUserByQuery
}