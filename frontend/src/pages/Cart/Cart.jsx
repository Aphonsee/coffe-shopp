import React from "react";
import { useCart } from "./CartItemV2/CartItemV2";

const Cart = () => {
  const { state, dispatch } = useCart();
   
  const increaseQuantity = (productId) => {
    // Tăng số lượng sản phẩm trong giỏ hàng
    dispatch({ type: "ADD_TO_CART", payload: productId });
  };
  
   const remove = (productId) => {
     // Xóa sản phẩm trong giỏ hàng
     dispatch({ type: "REMOVE_FROM_CART", payload: productId });
   };

   const sumPrice = () => {
        let totalPrice = 0;
        //lặp tính giá trị của từng sản phẩm có trong giỏ hàng
        state.cart.forEach((product) => {
          totalPrice += product.price * product.quantity;
        });

        return totalPrice;
   }

  //console.log(state.Cart)
  return (
    <div>
      {!state.cart ? (
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
                        //onClick={() => increaseQuantity(product.id)}
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              <tr class="relative bg-slate-700 text-2xl">
                <td></td>
                <td></td>
                <td className="text-center">Tổng tiền: </td>
                <td>${sumPrice()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div class="bg-gray-100 h-screen flex items-center justify-center">
          <div class="w-[40rem] p-8 bg-gray-50 border-2 rounded-lg shadow-lg">
            <h1 class="text-3xl font-semibold mb-4 text-center">
              Giỏ hàng của bạn đang trống
            </h1>
            <p class="text-gray-600 text-center">
              Không có sản phẩm nào trong giỏ hàng của bạn. 
              Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm.
            </p>
            <a
              href="/productList"
              class="mt-4 inline-block ml-[13rem] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Mua sắm ngay
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
