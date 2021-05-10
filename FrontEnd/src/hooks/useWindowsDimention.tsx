import {useState,useEffect} from 'react'

const getWindowsDimention = ()=> {

const { innerWidth: width,innerHeight : height} =window
return {width,height}

}

export const useWindowsDimention= () => {

const [windowDimention,setWindowDimention]=useState(getWindowsDimention())

const handelResize=()=>{
    setWindowDimention(getWindowsDimention)}

    useEffect(()=> {
        window.addEventListener('resize',handelResize)
    //  console.log(windowDimention.width)
        return ()=> window.removeEventListener('resize',handelResize)
    },[])

    return windowDimention

}