import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Routers from './routers/routers'

function App() {
  return (
   <>
      <Header/>
      <main>
        <Routers/>
      </main>
      <Footer/>
   </>
  )
}

export default App
 import "./index.css"
 
 import Footer from "./component/Footer.jsx"
 
import ProductList from "../src/pages/ProductList/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail/ProductDetail";




export default function App() {
    return (
      <>
     
     
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
        <Route path="/productsss" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
      
  
     <Footer/>
      </>
    )
  }