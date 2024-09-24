import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart-style.css';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += 1;
            setCart([...cart]);
        }
    };

    const decreaseQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
            setCart([...cart]);
        } else if (item) {
            removeItem(id);
        }
    };

    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <h3>{item.nombre}</h3>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio: ${item.precio * item.quantity}</p>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
