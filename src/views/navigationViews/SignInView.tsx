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
        history.push(RouttingPath.shop)

    }

    return (
        <div>

            <span>UserName : </span>
            <input onChange={event => setAuthenticatorUser(event.target.value)} />
            <button onClick={() => signin()}> sing in </button>

        </div>
    )
}
