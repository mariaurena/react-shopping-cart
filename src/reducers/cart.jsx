// ---- lógica de actualización del estado ----

// usamos el local storage para que los cambios se mantengan al actualizar
export const CartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART : 'REMOVE_FROM_CART',
    CLEAR_CART : 'CLEAR_CART'
}

// update local storage with state for cart
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart',JSON.stringify(state))
}

// transformar el estado 'state' a partir de la acción 'action'
// y calcular un nuevo estado
export const cartReducer = (state,action) => {

    const { type: actionType, playload: actionPlayload } = action

    // dependiendo de la acción haremos una cosa u otra
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id } = actionPlayload
            const productInCartIndex = state.findIndex(item => item.id === id)
        
            if (productInCartIndex >= 0){
                // copia profunda del array con 'structuredClone'
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                updateLocalStorage(newState)
                return newState
            }

            // el producto no está en el carrito
            const newState = [
                ...state,
                {
                    ...actionPlayload, // product
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState

        }

        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPlayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTION_TYPES.CLEAR_CART: {
            // devolvemos estado inicial (vacío)
            updateLocalStorage(CartInitialState)
            return CartInitialState
        }

    }

    return state
}