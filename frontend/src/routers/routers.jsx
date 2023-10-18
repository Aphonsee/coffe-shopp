import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Home from "../pages/Home/Home";
import  Cate_Product  from "../pages/ProductList/Cate_Product";
import Signin from "../pages/Signin/index";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart/Cart";




const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/productList" element={<ProductList/>}></Route>
    <Route path="/productdetail/:productId" element={<ProductDetail />} />
    <Route path="/categories/:categoryId" element={<Cate_Product/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
}

export default Routers;