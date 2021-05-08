import './HamburgerButton.css'
export const  HamburgerButton=(props : {drawerHandeler :Function} )=> {
    return (
        <button className='toggle-button' onClick={()=> props.drawerHandeler(true)}>
            
        </button>
    )
}


