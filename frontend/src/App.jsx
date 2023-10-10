import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Routers from './routers/routers'

function App() {
  return (
   <>
      <Header/>
      <main className='mt-7'>
        <Routers/>
      </main>
      <Footer/>
   </>
  )
}
export default App