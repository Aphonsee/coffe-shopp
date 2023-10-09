import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail () {
  
  const[products, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/getproducts/${productId}`) // Sử dụng productId thay vì idPro
    .then(product => setProduct(product.data))
    .catch(err => console.log(err))

  },[]);

  return (
    <>
   {products && <div>
              <div className="mt-10 mx-24" >
                
              <div class='w-48 h-80' >
                <img className="border-2 border-cyan-800 w-72 h-64" src={products.imagePro}/>
                <h2 className='text-center text-cyan-800 uppercase font-bold'> {products.size} </h2>
                <h1 className='text-center text-cyan-800 uppercase font-bold'>Giá: {products.price} VNĐ</h1>
              </div>
              
            </div>
    </div>
    }
    </>
  )
}