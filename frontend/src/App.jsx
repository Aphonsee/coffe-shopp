import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList/ProductList'
import Header from '../component/Header'
import Footer from '../component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Header/>
      <Footer/>
   </div>
  )
}

export default App