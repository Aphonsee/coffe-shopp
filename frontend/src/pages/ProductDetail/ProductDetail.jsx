import React from 'react'

export default function ProductDetail () {
  
  useEffect(() => {
    axios.get('http://localhost:3001/getProducts/${productId}')
    .then(product => setProduct(product.data))
    .catch(err => console.log(err))
  }, [productId])
  return (
    <div>
      <p>Giá: {product.price} VNĐ</p>
      
    </div>
  )
}
