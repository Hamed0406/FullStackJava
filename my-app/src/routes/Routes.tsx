import { BrowserRouter , Switch, Route} from 'react-router-dom'
import {HomeView} from '../views/HomeView'
import {LoginView} from '../views/LoginView'

export const Routes = (props:{ children? :React.ReactChild}) => {
    return (
       <BrowserRouter>
       {props.children}
             <Switch>
                <Route exact path={'/home'} component={HomeView}/>

                <Route component={LoginView }/> 
             </Switch>
           </BrowserRouter>
    )
}
