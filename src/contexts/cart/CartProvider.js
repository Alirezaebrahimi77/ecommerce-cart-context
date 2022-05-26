import React, {createContext, useContext, useReducer} from 'react'
import CartReducer from './CartReducer'


const cartContext = createContext()
const cartContextDispatcher = createContext()

const initialState = {
    cart: localStorage.getItem("ecommerceCartItems") ? JSON.parse(localStorage.getItem("ecommerceCartItems")) : []
}

function CartProvider({children}) {
   const [cart, dispatch] = useReducer(CartReducer, initialState)

  return (
    <cartContext.Provider value={cart}>
        <cartContextDispatcher.Provider value={dispatch}>
            {children}
        </cartContextDispatcher.Provider>
    </cartContext.Provider>
  )
}

export default CartProvider

export const useCart = () => useContext(cartContext);
export const useCartActions = () => useContext(cartContextDispatcher);