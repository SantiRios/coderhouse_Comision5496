import React, { useState, createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [count, setCount] = useState({cant: 0, products:[]});  
    return (
        <CartContext.Provider 
        value={{
            count,
            setCount,
            }}>
            {children}
        </CartContext.Provider>
    )
}

