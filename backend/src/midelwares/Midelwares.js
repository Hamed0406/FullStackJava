
const notFound=(request,response,next)=>{
    const error=new Error(`Not Found: ${request.orgnilaUrl}`)
    response.status(404)
    next(error)
}

export default {
    notFound
}