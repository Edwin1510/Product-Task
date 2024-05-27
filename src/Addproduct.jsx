import { useEffect, useState } from "react"
import { DeleteData,  Getdata } from "./Routers"
import AddproductShow from "./AddproductShow"
import './App.css'


const Addproduct=()=>{

const [postdata,setpostdata]=useState([])


const GetApi=async()=>{
  const data=   await Getdata()
  setpostdata(data)
}

useEffect(()=>{
    GetApi()
},[])

const handleDelete=async(id)=>{
    await DeleteData(id)
   setpostdata(postdata.filter((p)=>p.id !==id))
}



    return(
        <>
        {console.log(postdata)}
        <h1>Edwin</h1>
        <div className="container">
        {postdata.map((p)=>{
               return(
                <AddproductShow  {...p} key={p.id} onDelete={() => handleDelete(p.id)}  />
               )
        })}
        </div>
        </>
    )
}

export default Addproduct