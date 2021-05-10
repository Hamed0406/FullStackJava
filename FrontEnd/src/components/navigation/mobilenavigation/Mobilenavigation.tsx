import  './Mobilenavigation.css'
import {HamburgerButton}  from './hamburgerButton/HamburgerButton'
import  {Sidebar} from './sidebar/Sidebar'
import {BackDrop} from  './backDrop/BackDrop'
import {useState} from  'react'
import RouttingPath from '../../../routes/RouttingPath'
import { useHistory } from 'react-router-dom'

export const Mobilenavigation = () =>  {
    const [openDrawer,setOpenDrawer]=useState<boolean>(true)
    return (
        <div>
        <HamburgerButton drawerHandeler={setOpenDrawer} />
        <Sidebar drawerIsOpen={openDrawer} drawerHandeler={setOpenDrawer} />
        { !openDrawer|| <BackDrop/>}
        
        </div>
    )
}
