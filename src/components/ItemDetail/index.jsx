import "./idetail-style.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, imagen2, nombre, descripcion2, precio }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio 
        }
        addItem(item, quantity)
    }



    return(
        <section className="idetail_contenedor">
            <div className="contenedor_cental">
                <div className="img_contenedor">
                    <img src={imagen2} alt={descripcion2} />
                </div>
            <div className="datos_contenedor">
                <h2>{nombre}</h2>
                <p className="descripcion">{descripcion2}</p>
                <p className="precio">${precio}.-</p>
                <ItemCount onAdd={handleOnAdd} />
                
            </div>
        </div>  
        </section>
    )
}

export default ItemDetail;