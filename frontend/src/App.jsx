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