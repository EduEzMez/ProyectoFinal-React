import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './cart-style.css';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    const removerItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const incrementarQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += 1;
            setCart([...cart]);
        }
    };

    const restarQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
            setCart([...cart]);
        } else if (item) {
            removerItem(id);
        }
    };

    const compraLista = () => {
        navigate('/compra-realizada');
    };

    return (
        <div className="cart-container">
            <div>
                <h2>Tu Carrito</h2>
            </div>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul className="estilo_individual">
                        {cart.map(item => (
                            <li key={item.id}>
                                <img src={item.imagen} alt={item.descripcion} />
                                <h3>{item.nombre}</h3>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio: ${item.precio * item.quantity}</p>
                                <button onClick={() => incrementarQuantity(item.id)}>+</button>
                                <button onClick={() => restarQuantity(item.id)}>-</button>
                                <button onClick={() => removerItem(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <button className="boton-compra" onClick={compraLista}>Realizar compra</button>
                </>
            )}
        </div>
    );
};

export default Cart;
