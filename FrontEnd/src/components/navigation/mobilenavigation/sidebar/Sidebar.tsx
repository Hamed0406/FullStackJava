import  './Sidebar.css'

export const  Sidebar=(props : {drawerIsOpen:boolean,drawerHandeler: (handler: boolean )=> void}) =>{
    return (
        <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <h1 onClick={()=> props.drawerHandeler(false)}>Exit</h1>
        </div>
    )
}

