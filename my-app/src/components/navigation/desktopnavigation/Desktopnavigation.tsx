import './Desktopnavigation.css'
import { useHistory } from 'react-router-dom'
//for showing desktop navigation
export const Desktopnavigation = () => {
    const history=useHistory()
    return (
        <div>
            <span onClick={()=> history.push('/')}  >test</span>
            <span onClick={()=> history.push('/home')}>home</span>
        </div>
    )
}
