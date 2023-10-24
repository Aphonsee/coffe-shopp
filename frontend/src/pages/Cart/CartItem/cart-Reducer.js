

export const sumItems = cartItems => {
   
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    //let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount }
    
}
   

//nhưng mà thêm sản phẩm khác nó vẫn tăng số lượng cái sabr phẩm có trong giỏ thoi 
// hay h hà làm lại cách khác được kh cách nào cho nhanh á chiều mai hà báo cáo 

const cartReducer = (state, action) => {
  // console.log("Check action >>>" + action.type)

  if(action.type === "ADD_ITEM") {
     if (!state.cartItems.find((item) => item.id === action.payload.id)) {
       return (state.cartItems = [
         ...state.cartItems,
         { ...action.payload, quantity: 1 },
       ]);
     }
       return {
         ...state,
         cartItems: [...state.cartItems],
         ...sumItems(state.cartItems),
       };
  }

    switch (action.type) {
      case "INCREASE":{
        const increaseIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
          );
          ++state.cartItems[increaseIndex].quantity;
          return {
            ...state,
            cartItems: [...state.cartItems],
            ...sumItems(state.cartItems),
          };
          ;
        }
      default:
        return state;
    }
}

export default cartReducer 