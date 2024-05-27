import { BrowserRouter, Route, Routes } from "react-router-dom"

import Addproduct from "./Addproduct"
import App from "./App"
import Layout from "./Layout"


const AppRouter=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<App/>}/>
            <Route path="/addproduct" element={<Addproduct/>}/>
            </Route>
        </Routes>
        
        </BrowserRouter>
    )
}


export default AppRouter