
import './App.css'
const AddproductShow=({productname,image,prize,qty,onDelete})=>{


    const Totalcast=prize*qty
    return(
        <>
        <div className="card">
        <h1>ProductName:{productname}</h1>
        <img src={image} alt={productname}/>
        <h3>Prize:{prize}</h3>
        <h4>:QTY{qty}</h4>
        <h3><b>Totalcast:</b>{Totalcast}</h3>
        <button onClick={onDelete}>delete</button>
        </div>
        </>
    )
}

export default AddproductShow