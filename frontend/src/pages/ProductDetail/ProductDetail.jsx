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
      <div className="container mx-auto my-10">
        <div className="flex">
          <div className="w-1/2 px-44">
            <img src={products.imagePro} className="border-2 border-cyan-800 h-fit" />
          </div>
          <div className="w-1/2 pl-8">
            <h2 className="text-3xl font-bold text-black mb-4">{products.namePro}</h2>
            <p className="text-cyan-800 text-lg mb-4">Size:</p>
            
            <p className="text-rose-700 text-lg mb-4">Giá: {products.price} VNĐ</p>
            <button
              className="bg-cyan-800 text-white px-4 py-2 rounded-full text-sm mt-4"
              onClick="">
              Thêm vào giỏ hàng
            </button>
            
          </div>
        </div>
      </div>
    </div>
    }
    </>
  )
}