import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Header() {

  const[categories, setCategory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getcategories')
    .then(category => setCategory(category.data))
    .catch(err => console.log(err))
  }, [])

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
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-white hover:text-blue-500">
              Thực đơn
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-fit max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 hover:text-blue-500">
                <div className="p-4">
                  {categories.map((item) => {
                    return(
                    <div
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-blue-400">    
                      <div className="flex-auto">
                        <Link href='#' className="block font-semibold text-gray-900">
                          {item.cateName}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  )})}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
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