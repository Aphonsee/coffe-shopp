import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../Cart/CartItem/cart-Context";
import { isInCart } from "../Cart/CartItem/helpers";
import { useCart } from "../Cart/CartItemV2/CartItemV2";

export default function ProductDetail() {
  const [products, setProduct] = useState({});
  const { productId } = useParams();

    const { state, dispatch } = useCart();
   
  const isInCart = (product) => {
    return state.cart.some((item) => item.id === product.id);
  };
  
   const handleAddToCart = () => {
    if (isInCart(products)) {
      // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
      const action = { type: "ADD_TO_CART", payload: products }; // Sử dụng action "ADD_TO_CART" để thêm sản phẩm
      dispatch(action);
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới
      const action = { type: "ADD_TO_CART", payload: products };
      dispatch(action);
    }
  };



  useEffect(() => {
    axios
      .get(`http://localhost:3001/getproducts/${productId}`)
      .then((product) => {
        return setProduct({ ...product.data, quantity: +1 });
      })
      .catch((err) => console.log(err));
    // if(products) console.log("Check products >>" + prod/ucts);
  }, []);



  //tôi mệt bà ghê, co sản phẩm nào hok có số lượng hok ta ủa nhưng mà oder nước mà s mà có số lượng được
  //bà làm như nước vô hạn

  return (
    <>
      {products && (
        <div>
          <div className="container mx-auto my-10">
            <div className="flex">
              <div className="w-1/2 px-44">
                <img
                  src={products.imagePro}
                  className="border-2 border-cyan-800 h-fit"
                />
              </div>
              <div className="w-1/2 pl-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  {products.namePro}
                </h2>
                <p className="text-cyan-800 text-lg ">Size:</p>
                <p className="text-sm">
                  {" "}
                  {products.size?.map((sz) => {
                    return (
                      <div
                        className="border-solid border-2 rounded-md py-px px-1.5 my-2 inline-block mr-3 hover:bg-slate-500 "
                        key={sz}
                      >
                        {sz}
                      </div>
                    );
                  })}{" "}
                </p>
                <p className="text-rose-700 text-lg mt-8">
                  Giá: {products.price} VNĐ
                </p>
                <div>
                  
                    <button
                      onClick={handleAddToCart}
                      className="bg-cyan-800 text-white px-4 py-2 rounded-full text-sm mt-7"
                    >
                      Thêm vào giỏ hàng
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
