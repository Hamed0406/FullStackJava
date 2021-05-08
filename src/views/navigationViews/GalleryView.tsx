import Axios,{AxiosResponse} from 'axios'
 
import {useState} from 'react'


export const GalleryView = () => {

    const [data,setData]=useState<AxiosResponse>()
    const fetchData =()=> {
        Axios.get('https://swapi.dev/api/people/1')
        .then(response => { console.log(response)})
        .catch(error => {console.log(error)} )
    }

   const fetchData2 = async ()=> {
       try{
        const response=await Axios.get('https://swapi.dev/api/people/1')
        setData(response)
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
        </div>
    )
}
