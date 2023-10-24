import React from "react";
import { useCart } from "./CartItemV2/CartItemV2";

const Cart = () => {
  const { state, dispatch } = useCart();
   
  const increaseQuantity = (productId) => {
    // Tăng số lượng sản phẩm trong giỏ hàng
    dispatch({ type: "ADD_TO_CART", payload: productId });
  };
  
   const remove = (productId) => {
     // Tăng số lượng sản phẩm trong giỏ hàng
     dispatch({ type: "REMOVE_FROM_CART;", payload: productId });
   };

  console.log(state.Cart)
  return (
    <div>
      <div class="relative overflow-x-auto mx-auto shadow-md sm:rounded-lg w-[80%]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">
                Sản phẩm
              </th>
              <th scope="col" class="px-14 py-3">
                Số lượng
              </th>
              <th scope="col" class="px-6 py-3">
                Giá
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {state.cart.map((product) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-32 p-4">
                  <img src={product.imagePro} alt={product.name} />
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.namePro}
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <button
                     
                      class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div>
                      <input
                        type="number"
                        id={product.id}
                        class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={product.quantity}
                        required
                      />
                    </div>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      class="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${product.price}
                </td>
                <td class="px-6 py-4">
                  <button
                    onClick={() => remove(product.id)}
                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
