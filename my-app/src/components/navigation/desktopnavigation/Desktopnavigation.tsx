import './Desktopnavigation.css'
import { useHistory } from 'react-router-dom'
//for showing desktop navigation
export const Desktopnavigation = () => {
    const history=useHistory()
    return (
        <div>
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
