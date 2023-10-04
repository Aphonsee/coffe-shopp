import { useEffect, useState } from "react"
import axios from 'axios'
import './App.css'

function App() {

  const[products, setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getProducts')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
    { products.map(item => {
      return(
      <div className="mt-10 mx-24" >
      <div className='w-48 h-80' >
        <img className="border-2 border-cyan-800 w-48 h-{270}" src={item.imagePro}/>
          <h2 className='text-center text-cyan-800 uppercase font-bold'> {item.namePro} </h2>
          <h1 className='text-center text-cyan-800 uppercase font-bold'>Giá: {item.price} VNĐ</h1>
      </div>
    </div>
    )})}
    </div>
  )
}

export default App