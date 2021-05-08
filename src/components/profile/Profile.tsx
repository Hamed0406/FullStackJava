import './Profile.css'
import { useState, useContext} from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import {ProfileDropDown} from './ProfileDropDown'



export const Profile = (): JSX.Element => {

    const [authenticatorUser, setAuthenticatorUser] = useContext(UserContext)

    return (
        <div className='profileWrapper'>
            <span>{authenticatorUser}</span>
            <img className='profileImge' src={'https://thispersondoesnotexist.com/image'} alt={'error loading imag'} />
            <ProfileDropDown/>
        </div>
    )
}
