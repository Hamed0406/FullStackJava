// responsible for what display choise for showing 
import { Desktopnavigation } from './desktopnavigation/Desktopnavigation'
import {useWindowsDimention} from '../../hooks/useWindowsDimention'
import {useEffect} from 'react'
import { Mobilenavigation } from './mobilenavigation/Mobilenavigation'

export const Navigation = () => {
    const {width,height}=useWindowsDimention()
/*useEffect ( ()=> {
    console.log(width,height)
}

)*/

const navigationViewPort= () => {
    return width<1000 ? <Mobilenavigation/> : <Desktopnavigation/>
}
    return (
        <div>
                   {navigationViewPort()}

        </div>
    )
}
