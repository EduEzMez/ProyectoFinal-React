import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const notify = () => toast('Agregado al carrito!', {
        position: "top-center",
        autoClose: 800,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
    });

    return (
        <div className="itemcount-contenedor">
            <p>{cantidad}</p>
            <button onClick={aumentarProducto}>+</button>
            <button onClick={descontarProducto}>-</button>
            {/* Asi puedo agregar dos variables en una misma accion de boton 
            () => {agregarCarrito(); notify()} */}
            <button onClick={() => {agregarCarrito(); notify()}}>Agregar</button>
            <ToastContainer></ToastContainer>
        </div>
    )
}
export default ItemCount;
