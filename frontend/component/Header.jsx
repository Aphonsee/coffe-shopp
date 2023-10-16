import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Header() {

  

  return (
    <header className="bg-slate-800 ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h2 className='text-white text-2xl'> DHDRINKS</h2>
          </a>
        </div>
      
      
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Link to="/" className="text-lg font-semibold leading-6 text-white hover:text-blue-500">
            Trang chủ
          </Link>
          <Link to="/productlist" className="text-lg font-semibold leading-6 text-white hover:text-blue-500">
          Sản phẩm  
          </Link>
          <a href="#" className="text-lg font-semibold leading-6 text-white hover:text-blue-500">
            Đơn hàng 
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        </div>
        <div className="hidden lg:flex ml-5 lg:justify-end">
        </div>
      </nav>
    
    </header>
  )
}
export default Header