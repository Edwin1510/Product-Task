
import { Link, Outlet } from 'react-router-dom'
import './App.css'
const  Layout=()=>{
    return(
        <>
        <header className="header">
                   
             <span ><Link to="/home" className='stylelink'  >Home</Link> </span>
              
             <span ><Link to="/addproduct" className='stylelink' >Addproduct</Link></span>
        </header>
        <Outlet/>
        </>
    )
}

export default Layout
