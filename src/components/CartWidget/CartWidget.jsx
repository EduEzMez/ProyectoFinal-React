import Cart from "./assets/cart.svg"
import './cart-style.css'
const CartWidget = () => {
    return (
        <div className="contenedor_cardw">
            <img src={Cart} alt="Carro de compras" />
            <p className="num_item">0</p>
        </div>
    )
}

export default CartWidget