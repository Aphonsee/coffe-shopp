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
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    
    </header>
  )
}
export default Header