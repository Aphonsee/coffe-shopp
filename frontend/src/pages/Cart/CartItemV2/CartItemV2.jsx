import React, { createContext, useReducer, useContext } from "react";

// Khởi tạo Context
export const CartContext = createContext();

// Reducer để quản lý giỏ hàng
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
       
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng của sản phẩm đó
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;

        return { ...state, cart: updatedCart };
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới với số lượng là 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    // Thêm sản phẩm vào giỏ hàng
    case "REMOVE_FROM_CART":
      // Xóa sản phẩm khỏi giỏ hàng
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "COUNT_ITEMS":
      // Trả về số lượng mục trong giỏ hàng (chiều dài của mảng cart)
      return { ...state, itemCount: state.cart.length };

    default:
      return state;
  }
};

// Khởi tạo giá trị ban đầu cho Context
const initialState = { cart: [] };

// Tạo Provider cho Context
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Tạo custom hook để sử dụng Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
