const CartReducer = (state, action) => {
  switch(action.type){
      case 'ADD_TO_CART':{
        const updatedCart = [...state.cart];
        const index = updatedCart.findIndex(item => item.id === action.payload.id)
  
        if(index < 0){
          updatedCart.push({...action.payload, quantity: 1})
          
        }else{
          let updatedItem = {...updatedCart[index]}
          updatedItem.quantity++
          updatedCart[index] = updatedItem
         
        }
        localStorage.setItem("ecommerceCartItems", JSON.stringify(updatedCart))
        return {...state, cart: updatedCart}

      }



    case 'REMOVE_PRODUCT':{
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(item => item.id === action.payload.id)
      const updatedItem = {...updatedCart[index]}

      if(updatedItem.quantity === 1){
       const filteredCart = updatedCart.filter(item => item.id !== action.payload.id)
       localStorage.setItem("ecommerceCartItems", JSON.stringify(filteredCart))
       return {...state, cart: filteredCart}

      }else{
        updatedItem.quantity--;
        updatedCart[index] = updatedItem
        localStorage.setItem("ecommerceCartItems", JSON.stringify(updatedCart))
        return {...state, cart: updatedCart}
      }
    }


      default: return state
  }
}

export default CartReducer