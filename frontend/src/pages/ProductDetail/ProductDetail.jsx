import React, {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const [products, setProduct] = useState({});
  const { productId } = useParams();
  //const [cart,setCart]=useState({});
  const user = localStorage.getItem("user");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getproducts/${productId}`)
      .then((product) => {
        return setProduct({ ...product.data });
      })
      .catch((err) => console.log(err));
  }, []);
  const userId = localStorage.getItem("userId");
  

  const handleAddToCart = () => {
    // Gọi phương thức POST để thêm sản phẩm vào giỏ hàng
    axios
      .post("http://localhost:3001/cart/addItems", {
        productId: productId,
        quantity: 1,
        price: products.price,
        userId,
        totalPrice: products.price,
      })
      .then((response) => {
        console.log("Sản phẩm đã được thêm vào giỏ hàng", response.data);
        window.location.href = `/cart/${userId}`;
      })
      .catch((error) => {
        console.error("Lỗi khi thêm sản phẩm vào giỏ hàng", error);
      });
  };
  const SIZE = ["S", "M", "L"];

  return (
    <>
      {products && (
        <div>
          <div className="container mx-auto my-10">
            <div className="flex">
              <div className="w-1/2 px-44">
                <img
                  src={products.imagePro}
                  className="border-2 border-cyan-800 h-[30rem] w-[22rem]"
                />
              </div>
              <div className="w-1/2 pl-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  {products.namePro}
                </h2>
                <p className="text-cyan-800 text-lg ">Size:</p>
                <p className="text-sm">
                  {" "}
                  {SIZE.map((sz) => {
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
                  {!user ? (
                    <h1 className="mt-10 text-lg text-cyan-900">
                      Hãy đăng nhập để mua hàng nhé !!!
                    </h1>
                  ) : (
                    
                      <button
                        onClick={handleAddToCart}
                        className="bg-cyan-800 text-white px-4 py-2 rounded-full text-sm mt-7"
                      >
                        Thêm vào giỏ hàng
                      </button>
                    
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
