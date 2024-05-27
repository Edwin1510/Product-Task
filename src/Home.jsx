import { useState } from "react";
import { Createdata } from "./Routers";

import './App.css'
const ProductShow = ({ productname, image, prize}) => {
    const [formdata, setformdata] = useState({
        productname: productname,
        image: image,
        prize: prize,
        qty: "1",
    });

    const [postdata,setpostdata]=useState([]);

    const handleChange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value,
        })
        }

    const handleSubmit = async(e) => {
        e.preventDefault();
     const data=await Createdata(formdata)
        setpostdata(data)
        
             alert("ADD CARD SUCESSFULLY! GO TO ADD PRODUCT PAGE CHECK & VERIFY")
       
       
    };

    return (
        <>
        {console.log(postdata)}
           <div className="card">
                <h1>Name:{productname}</h1>
                <img src={image} alt={productname} />
                <h3>Prize:{prize}</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="qty">Qty</label>
                    <select id="qty" name="qty" onChange={handleChange} value={formdata.qty}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select><br/><br/>
                    
                    <button className="button">Add to Cart</button>
                </form>
                </div>  
                
        </>
    );
};

export default ProductShow;
