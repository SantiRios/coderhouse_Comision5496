import React from 'react'
import MainRouter from './routes/MainRouter';
import { CartProvider } from './context/CartContext';

const App = () => {
    return (
        <div> 
            <CartProvider>
                <MainRouter />
            </CartProvider>
        </div>
    )
}

export default App