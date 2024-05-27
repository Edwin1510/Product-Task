
import './App.css'
import ProductShow from './Home'
import data from './data.json'

function App() {
  

  return (
    <>
      <div>
        
       <div className="container">
        {data.map((p)=>{
          return(
            <ProductShow {...p} key={p.productname} />
          )
        })}
        </div>
       


        </div>
    </>
  )
}

export default App
