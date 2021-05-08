import  http from '../StartWarsAPI'

  const getLuckSkyWalker = ()=>
{
    return http.get('/people/1')
}

export default {
   getLuckSkyWalker

}