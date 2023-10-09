import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Home from "../pages/Home/Home";

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/productList" element={<ProductList/>}></Route>
    <Route path="/productDetail" element={<ProductDetail/>}></Route>
  </Routes>
}

export default Routers;