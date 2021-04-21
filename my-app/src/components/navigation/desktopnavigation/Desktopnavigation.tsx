import './Desktopnavigation.css'
import { useHistory } from 'react-router-dom'
import logotype from '../../../shared/images/undraw_cooking_lyxy.svg'
import RouttingPath from '../../../routes/RouttingPath'

//for showing desktop navigation
export const Desktopnavigation = () => {
    const history = useHistory()
    return (
        <div className='desktopNaigationWrapper'  >


            <img className='navigationLogo' onClick={() => history.push('/')} src={logotype} alt={'error...'} />
            <div className='otherLinks'>
            <span className='signUpButton' onClick={() => history.push(RouttingPath.singUp)}>singUp</span>
            <span  className='newsButton' onClick={() => history.push(RouttingPath.news)}>news</span>
            <span className='shopButton' onClick={() => history.push(RouttingPath.shop)}>shop</span>
            <span className='galleryButton' onClick={() => history.push(RouttingPath.gallery)}>gallery</span>
            </div>
            <span className='singIn' onClick={() => history.push(RouttingPath.signIn)}>signIn</span>




        </div>

    )
}

