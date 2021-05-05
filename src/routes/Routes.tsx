import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { LoginView } from '../views/LoginView'
import { GalleryView } from '../views/navigationViews/GalleryView'
import { SignInView} from '../views/navigationViews/SignInView'
import { SignUpView} from '../views/navigationViews/SignUpView'
import { NewsView} from '../views/navigationViews/NewsView'
import { ShopView} from '../views/navigationViews/ShopView'
import {SettingView} from '../views/profileDropDownView/SettingView'
import {ProfileView} from '../views/profileDropDownView/ProfileView'

import RouttingPath from './RouttingPath'


 
export const Routes = (props: { children?: React.ReactChild }) => {
   return (
      <BrowserRouter>
         {props.children}
         <Switch>
            <Route exact path={'/home'} component={HomeView} />
            <Route exact path={RouttingPath.gallery} component={GalleryView} />
            <Route exact path={RouttingPath.signIn} component={SignInView} />
            <Route exact path={RouttingPath.singUp} component={SignUpView} />
            <Route exact path={RouttingPath.news} component={NewsView} />
            <Route exact path={RouttingPath.shop} component={ShopView} />
            <Route exact path={RouttingPath.settingView} component={SettingView} />
            <Route exact path={RouttingPath.profileView} component={ProfileView} />


            <Route component={LoginView} />
         </Switch>
      </BrowserRouter>
   )
}
