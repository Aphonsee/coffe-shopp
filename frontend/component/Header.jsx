import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Coffee ', description: 'Get a better understanding of your traffic', href: '#'  },
  { name: 'Trà', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Trà sữa', description: 'Your customers’ data will be safe and secure', href: '#'},
  { name: 'Đá xay', description: 'Connect with third-party tools', href: '#' },
  { name: 'Nước ép', description: 'Build strategic funnels that will convert', href: '#'},
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-cyan-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h2 className='text-white text-2xl'> DH Drink</h2>
          </a>
        </div>
      
      
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Link to="/" className="text-lg font-semibold leading-6 text-white ">
            Trang chủ
          </Link>
          <Link to="/productlist" className="text-lg font-semibold leading-6 text-white">
          Sản phẩm  
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-white">
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
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-fit max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >    
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
            </Transition>
          </Popover>

        
          <a href="#" className="text-lg font-semibold leading-6 text-white">
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