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
        <Route path="productdetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
      
  
     <Footer/>
      </>
    )
  }