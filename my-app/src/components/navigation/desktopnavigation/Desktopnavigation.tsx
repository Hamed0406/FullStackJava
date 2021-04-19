import './Desktopnavigation.css'
import { useHistory } from 'react-router-dom'
import logotype from '../../../shared/images/undraw_cooking_lyxy.svg'
//for showing desktop navigation
export const Desktopnavigation = () => {
    const history=useHistory()
    return (
        <div className='desktopNaigationWrapper'>
            <img className='navigationLogo' onClick={()=> history.push('/')} src={logotype} alt={'error...'} style={{width: 50}}/>
            <span onClick={()=> history.push('/')}  >test</span>
            <span onClick={()=> history.push('/home')}>home</span>
            <span onClick={()=> history.push('/gallery')}>gallery</span>
            <span onClick={()=> history.push('/signIn')}>signIn</span>
            <span onClick={()=> history.push('/singUp')}>singUp</span>
            <span onClick={()=> history.push('/news')}>news</span>
            <span onClick={()=> history.push('/shop')}>shop</span>

        </div>
    )
}
