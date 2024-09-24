import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./itemc-style.css";

const ItemCount = ({ onAdd }) => {
    const [cantidad, setCantidad] = useState(0);
    
    const aumentarProducto = () => {
        setCantidad(cantidad + 1);
    };

    const descontarProducto = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    const agregarCarrito = () => {
        onAdd(cantidad);
        console.log("Cantidad agregada:", { cantidad });
    };
    

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
        <div className="cantidad_contenedor">
            <p className="cantidad">{cantidad}</p>
            <div>
                <button className="boton" onClick={aumentarProducto}>+</button>
                <button className="boton" onClick={descontarProducto}>-</button>
            </div>
            <div>
                <button className="boton-agregar" onClick={agregarCarrito}>Agregar al carrito</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ItemCount;