import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { LoginView } from '../views/LoginView'
import { GalleryView } from '../views/navigationViews/GalleryView'
import { SignInView} from '../views/navigationViews/SignInView'
import { SignUpView} from '../views/navigationViews/SignUpView'
import { NewsView} from '../views/navigationViews/NewsView'
import { ShopView} from '../views/navigationViews/ShopView'


 
export const Routes = (props: { children?: React.ReactChild }) => {
   return (
      <BrowserRouter>
         {props.children}
         <Switch>
            <Route exact path={'/home'} component={HomeView} />
            <Route exact path={'/gallery'} component={GalleryView} />
            <Route exact path={'/signIn'} component={SignInView} />
            <Route exact path={'/singUp'} component={SignUpView} />
            <Route exact path={'/news'} component={NewsView} />
            <Route exact path={'/shop'} component={ShopView} />


            <Route component={LoginView} />
         </Switch>
      </BrowserRouter>
   )
}
