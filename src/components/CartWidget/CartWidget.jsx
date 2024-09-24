import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'; // Asegúrate de importar esto
import Cart from "./assets/cart.svg";
import './cart-style.css';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/carrito" className="contenedor_cardw">
            <img src={Cart} alt="Carro de compras" />
            <p className="num_item">{totalItems}</p>
        </Link>
    );
};

export default CartWidget;