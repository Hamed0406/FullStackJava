import {Routes} from './routes/Routes'
import {Navigation} from './components/navigation/Navigation'
import {UserProvider} from './shared/provider/UserProvider'
 
// put name of fonction in index.tsx bewteen { }
export const App = () => {
  return (  
    <UserProvider>
   <Routes>
     <Navigation/>
     
   </Routes>
   </UserProvider>
  )
}

