import Axios,{AxiosResponse} from 'axios'
 
import {useState} from 'react'
import StarWarsAPIServies from '../../shared/api/servies/StarWarsAPIServies'


export const GalleryView = () => {

    const [data,setData]=useState<AxiosResponse|any>()
    

   const fetchData2 = async ()=> {
       try{
        const response=await StarWarsAPIServies.getLuckSkyWalker()
        setData(response.data)
        console.log(response)
    }
    catch(error)
    {
        console.log( 'error occured :',error)
    }
    }
    return (
        <div>
            <button onClick={()=> fetchData2()} > Api call</button>
            <button  onClick={()=> console.log(data)} > chek my state</button>
            <h2>{data?.name}</h2>
            <h2>{data?.gender}</h2>
            <h2>{data?.birth_year}</h2>


        </div>
    )
}
