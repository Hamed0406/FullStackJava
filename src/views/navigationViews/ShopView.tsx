import { useEffect } from 'react'
import { useState } from 'react'



export const ShopView = () => {
    const [counter,setCounter]=useState(0)
    useEffect(() => { alert("First render ")
    return () => {alert('last alert')}

},[])
    return (
        <div>
            <h2 onClick={()=>setCounter(counter+1)}>{counter}</h2>
            <h1>shop view</h1>
        </div>
    )
}
