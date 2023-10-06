import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function ProductList() {

  const[products, setProduct] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getProducts')
    .then(product => setProduct(product.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <>
    <Header/>
    <Slide/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map(item => {
          return(
              <Link to="/productdetail" className="mt-10 mx-24" >
              <div class='w-48 h-80' >
                <img className="border-2 border-cyan-800 w-72 h-64" src={item.imagePro}/>
                <h2 className='text-center text-cyan-800 uppercase font-bold'> {item.namePro} </h2>
                <h1 className='text-center text-cyan-800 uppercase font-bold'>Giá: {item.price} VNĐ</h1>
              </div>
            </Link>
          )
        })}
      </div>
    <Footer/>
    </>
  
  )
}

export default ProductList