import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ProductDetail from '../src/pages/ProductDetail/ProductDetail';

/**
 * Id category vao value cua h
 * 
 * 
 */


function NavbarCol() {
    const[categories, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
        axios.get('http://localhost:3001/getcategories')
        .then(category => setCategory(category.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        // Lọc danh sách sản phẩm dựa trên selectedCategory
        if (selectedCategory) {
          axios.get(`http://localhost:3001//getcategories/${categoryId}`)
            .then(response => setFilteredProducts(response.data))
            .catch(err => console.log(err));
        }   
      }, [selectedCategory]);
    
     
      function renderProducts(products) {
        // TODO: Thực hiện các thao tác để hiển thị danh sách sản phẩm trong giao diện
        <ProductDetail/>
      }
    
  return (
    <div>
        <nav
        id="sidenav-8"
        class="left-0 mt-16 z-[1035] h-full w-52 bg-white data-[te-sidenav-hidden='false']:translate-x-0"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="fixed"
        data-te-sidenav-accordion="true">
        <p class="text-center text-[1.3rem]">Danh mục sản phẩm</p>
        <ul
          class="relative m-0 list-none px-[0.2rem] pb-12"
          data-te-sidenav-menu-ref>
          {categories.map((item) => {
            return(
          <li class="relative pt-4">
            <Link to={`/categories/${item._id}`}
             //onClick={() => handleCategoryClick(item.id)}
              class="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[1.2rem] text-black outline-none  dark:hover:bg-blue-700/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref> 
              <span
                class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              </span>
              <span>{item.cateName}</span>
            </Link>
          </li>
          )})}
         </ul>
      </nav>
    </div>
  )
}
export default NavbarCol    