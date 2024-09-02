import { useState } from "react";

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
        console.log("Cantidad agregada:", {cantidad})
    }
    
    return (
        <div>
            <p>{cantidad}</p>
            <button onClick={aumentarProducto}>+</button>
            <button onClick={descontarProducto}>-</button>
            <button onClick={agregarCarrito}>Agregar</button>
        </div>
    )

}

export default ItemCount;
