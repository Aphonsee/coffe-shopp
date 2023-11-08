import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../component/NavbarAdmin";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateProduct from "./FormCreate/CreateProduct";

function Admin() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getproducts")
      .then((product) => setProduct(product.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex">
      <div className="border-r-2">
        <NavbarAdmin />
      </div>

      <div className="w-fit">
        <form className="my-10 mx-7 flex">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative w-full mr-10">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
          <Link to={"/createPro"}>
            <button className="border-2 m-auto h-10 w-48 shadow-lg shadow-green-950 hover:bg-green-700 rounded-xl pl-1 bg-green-500">
              Thêm sản phẩm
            </button>
          </Link>
        </form>

        <table className="mx-7 shadow-lg border-2">
          <thead>
            <tr class=" border-b-2 text-lg">
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <tr className="border-2">
                  <td>
                    <img
                      className="border-2 border-cyan-800 w-28 h-28 mx-10 my-1"
                      src={item.imagePro}
                    />
                  </td>
                  <td>
                    <p className="mx-10">{item.namePro}</p>
                  </td>
                  <td>
                    <p className="mx-10">${item.price}</p>
                  </td>
                  <td>
                    <p className="mx-10">{item.category}</p>
                  </td>
                  <td className="flex my-10">
                    <Link
                      to={`/updatePro/${item._id}`}
                      className="border-2 rounded-md mx-4 bg-green-600 shadow-md shadow-green-900 hover:bg-green-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </Link>
                    {/* Ẩn sản phẩm */}
                    <button
                      className="border-2 rounded-md w-9 mr-4 shadow-md shadow-rose-950 bg-red-500 hover:bg-rose-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Admin;
