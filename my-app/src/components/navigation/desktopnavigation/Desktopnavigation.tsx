import './Desktopnavigation.css'
import { useHistory } from 'react-router-dom'
import logotype from '../../../shared/images/undraw_cooking_lyxy.svg'
//for showing desktop navigation
export const Desktopnavigation = () => {
    const history = useHistory()
    return (
        <div className='desktopNaigationWrapper'  >


            <img className='navigationLogo' onClick={() => history.push('/')} src={logotype} alt={'error...'} />
            <div className='otherLinks'>
            <span className='signUpButton' onClick={() => history.push('/singUp')}>singUp</span>
            <span  className='newsButton' onClick={() => history.push('/news')}>news</span>
            <span className='shopButton' onClick={() => history.push('/shop')}>shop</span>
            <span className='galleryButton' onClick={() => history.push('/gallery')}>gallery</span>
            </div>
            <span className='singIn' onClick={() => history.push('/signIn')}>signIn</span>




        </div>

    )
}

