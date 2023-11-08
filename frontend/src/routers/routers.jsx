import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Home from "../pages/Home/Home";
import Cate_Product from "../pages/ProductList/Cate_Product";
import Signin from "../pages/Signin/index";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart/Cart";
import Admin from "../admin/QLProducts";
import UpdateProduct from "../admin/FormUpdate/UpdateProduct";
import CreateProduct from "../admin/FormCreate/CreateProduct";
import Checkout from "../pages/Checkout/Checkout";



const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/productList" element={<ProductList/>}></Route>
    <Route path="/productdetail/:productId" element={<ProductDetail />} />
    <Route path="/categories/:categoryId" element={<Cate_Product/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/adminPage" element={<Admin/>}></Route>
    <Route path="/updatepro/:productId" element={<UpdateProduct/>}/>
    <Route path="/createPro" element={<CreateProduct/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
  </Routes>
}
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/productList" element={<ProductList />}></Route>
      <Route path="/productdetail/:productId" element={<ProductDetail />} />
      <Route path="/categories/:categoryId" element={<Cate_Product />} />
      <Route path="/cart/:cartId" element={<Cart />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routers;
