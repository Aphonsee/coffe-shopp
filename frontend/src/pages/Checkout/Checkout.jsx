import React from "react";

function Checkout() {
  return (
    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div class="px-4 pt-8">
        <p class="text-xl font-medium">Sản phẩm thanh toán</p>
        <p class="text-gray-400">
          Vui lòng kiểm tra kỹ lại sản phẩm và chọn phương thức thanh toán
        </p>
        <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          <div class="flex flex-col rounded-lg bg-white sm:flex-row">
            <img
              class="m-2 h-24 w-28 rounded-md border object-cover object-center"
              src="{value.image}"
              alt=""
            />
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold">tên</span>
              <span class="float-right text-gray-400">
                aaaaaaaaaaa
              </span>
              <p class="text-lg font-bold">giá ở đây</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p class="text-xl font-medium">Thông tin thanh toán</p>
        <p class="text-gray-400">Vui lòng hoàn thành quá trình thanh toán.</p>
        <div class="">
          <label for="email" class="mt-4 mb-2 block text-sm font-medium">
            Email
          </label>
          <div class="relative">
            <input
              type="text"
              id="email"
              name="email"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="your.email@gmail.com"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>
          <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">
            Họ tên
          </label>
          <div class="relative">
            <input
              
              type="text"
              id="card-holder"
              name="card-holder"
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Điền họ tên của bạn"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>

          <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
            Thẻ thanh toán
          </label>
          <div class="flex">
            <div class="relative w-7/12 flex-shrink-0">
              <input
                type="text"
                id="card-no"
                name="card-no"
                class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  class="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              name="credit-expiry"
              class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="MM/YY"
            />
            <input
              type="text"
              name="credit-cvc"
              class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="CVC"
            />
          </div>
          <label
            for="billing-address"
            class="mt-4 mb-2 block text-sm font-medium"
          >
            Địa chỉ
          </label>
          <div class="flex flex-col sm:flex-row">
            <div class="relative flex-shrink-0 sm:w-7/12">
              <input
                
                type="text"
                id="billing-address"
                name="billing-address"
                class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Địa chỉ"
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <img
                  class="h-4 w-4 object-contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_North_Vietnam_%281945%E2%80%931955%29.svg/230px-Flag_of_North_Vietnam_%281945%E2%80%931955%29.svg.png"
                  alt=""
                />
              </div>
            </div>
            <select
              type="text"
              name="billing-state"
              class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="TPHCM">TP.HCM</option>
              <option value="TPHCM">Hà Nội</option>
            </select>
           
          </div>

          <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">
                Giá tất cả sản phẩm
              </p>
              <p class="font-semibold text-gray-900">
                
              </p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Tổng hóa đơn</p>
            <p class="text-2xl font-semibold text-gray-900">
              
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Checkout;
