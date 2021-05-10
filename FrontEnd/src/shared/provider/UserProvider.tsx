import { useState, createContext} from 'react'


import React from 'react'

export const UserContext=createContext<any>(null)
export const UserProvider=(props:{children?: React.ReactChild}) => {
    const [authenticatorUser,setAuthenticatorUser]=useState()




    return (
        <UserContext.Provider value={[authenticatorUser,setAuthenticatorUser]}>
           {props.children} 
        </UserContext.Provider>
    )
}

