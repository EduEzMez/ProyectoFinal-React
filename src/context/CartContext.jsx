// context/CartContext.js
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addItem }}>
           {children}
        </CartContext.Provider>
    );
};
