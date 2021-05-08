import './ProfileDropDown.css'
import {useHistory} from 'react-router-dom'
import RouttingPath from '../../routes/RouttingPath'
import { UserContext } from '../../shared/provider/UserProvider'
import { useContext } from 'react'


export const ProfileDropDown = () => {

    const [authenticatorUser, setAuthenticatorUser] = useContext(UserContext)

const history=useHistory()

const logOut=()=> {
setAuthenticatorUser(false)
localStorage.removeItem('username')
history.push(RouttingPath.signIn)
}
    return (
        <div className='profileDropDownWrapper'>
            <span> Firstname Lastname </span>
            <span>Email</span>
            <hr/>
            <span onClick={()=> history.push(RouttingPath.profileView)}>Profile</span> <br/>
            <span onClick={()=> history.push(RouttingPath.settingView)}>Setting</span> <br/>
            <span onClick={()=>logOut()} >Log out</span>
        </div>
    )
}
