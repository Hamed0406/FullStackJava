import  http from '../MyAPI'

  const getAllUsers = ()=>
{
    return http.get('/user')
}

export default {
   getAllUsers

}