import  './Mobilenavigation.css'
import {HamburgerButton}  from './hamburgerButton/HamburgerButton'
import  {Sidebar} from './sidebar/Sidebar'
import {useState} from  'react'

export const Mobilenavigation = () =>  {
    const [openDrawer,setOpenDrawer]=useState<boolean>(true)
    return (
        <div>
        <HamburgerButton drawerHandeler={setOpenDrawer} />
        <Sidebar drawerIsOpen={openDrawer} drawerHandeler={setOpenDrawer} />
        </div>
    )
}
