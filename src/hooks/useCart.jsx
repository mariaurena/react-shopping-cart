import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
    const context = useContext(CartContext)

    // si el contexto es undefined quiere decir que la parte donde
    // queremos usarlo no está envuelta en un Provider de dicho contexto
    if (context === undefined){
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
}