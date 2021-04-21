import { useState } from 'react'
import {useEffect} from 'react'

export const SignInView = () => {
    const [userName, setUserName] = useState<String>('')
    const [password,setPassword]=useState<String>('')

    return (
        <div>
            <h1>{userName}</h1>
            <h1>{password}</h1>
            <span>UserName : </span>
            <input onChange={event=> setUserName(event.target.value)} /><br/>
            <span>Password</span>           
             <input  onChange={event=> setPassword(event.target.value)} /><br/>

            <button onClick={() => setUserName('Random')} >Login</button>
        </div>
    )
}
