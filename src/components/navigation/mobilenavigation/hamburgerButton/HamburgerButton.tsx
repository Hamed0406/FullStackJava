import './HamburgerButton.css'
export const  HamburgerButton=(props : {drawerHandeler :Function} )=> {
    return (
        <button className='toggle-button' onClick={()=> props.drawerHandeler(true)}>
            
            <div className="toggle.-button_line"></div>
            <div className="toggle.-button_line"></div>
            <div className="toggle.-button_line"></div>

        </button>
    )
}


