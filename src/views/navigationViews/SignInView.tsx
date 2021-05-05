import { useState, useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RouttingPath from '../../routes/RouttingPath'

export const SignInView = () => {
    const [username,setUsername]=useState<string>('')
    const history = useHistory()
    const [authenticatorUser, setAuthenticatorUser] = useContext(UserContext)
    const signin = () => {
        setAuthenticatorUser(username)

        localStorage.setItem('username', authenticatorUser)
        history.push(RouttingPath.gallery)

    }

    return (
        <div>

            <span>UserName : </span>
            <input onChange={event => setUsername(event.target.value)} /> <br/>
            <button onClick={() => signin()}> singin </button>

        </div>
    )
}
