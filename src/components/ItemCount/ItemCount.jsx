import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./itemc-style.css"
function ItemCount(){

    const [cantidad, setCantidad] = useState(0);
    const aumentarProducto = () => {
        setCantidad(cantidad + 1)
    }
    const descontarProducto = () => {
        if (cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }
    const agregarCarrito = () => {
        console.log("Cantidad agregada:",{cantidad})
    }

  //https://fkhadra.github.io/react-toastify/introduction/
    const notify = () => toast.success('Agregado al carrito!', {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        pauseOnHover: false,
        closeOnClick: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });

    return (
        <div>
            <p>{cantidad}</p>
            <button onClick={aumentarProducto}>+</button>
            <button onClick={descontarProducto}>-</button>
            {/* Asi puedo agregar dos variables en una misma accion de boton 
            () => {agregarCarrito(); notify()} */}
            <button className="boton-agregar" onClick={() => {agregarCarrito(); notify()}}>Agregar al carrito</button>
            <ToastContainer></ToastContainer>
        </div>
    )
}
export default ItemCount;
