import { useReducer } from "react";
import { createContext } from "react";
import { cartReducer, CartInitialState } from "../reducers/cart";

// 1: Creamos el contexto para el carrito
export const CartContext = createContext()

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer,CartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        playload: product
    }) 

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        playload: product
    }) 

    const clearCart = () => dispatch({
        type: 'CLEAR_CART',
    }) 

    return { state, addToCart, removeFromCart, clearCart }
}

// 2: Proveer el contexto
export function CartProvider ({ children }){

    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()


    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
