import React from 'react'
import MyAPIServies from '../../shared/api/servies/MyAPIServies'
import {useState} from 'react'
export const ProfileView = () => {
const [serverResponse,setserverResponse]=useState<any>([])
    const fetchData= async ()=> {
const {data}= await MyAPIServies.getAllUsers()
setserverResponse(data)
console.log(data)
    }

const displayData=()=>{
    return (
        serverResponse.map((x:any)=><h1>{x.username}</h1>)
    )
}

    return (
        <div>
            <button onClick={()=>fetchData()}>Make call to backEnd</button>
      {displayData()}
        </div>
    )
}
