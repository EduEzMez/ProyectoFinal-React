import "./idetail-style.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

// Simulación del spinner
const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    );
};

const ItemDetail = ({ id, imagen, imagen2, nombre, descripcion, descripcion2, precio }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const [loading, setLoading] = useState(true); //

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, imagen, nombre, precio
        };
        addItem(item, quantity);
    };

    useEffect(() => {
        
        setTimeout(() => {
            setLoading(false); 
        }, 1000);
    }, []);

    return (
        <section className="idetail_contenedor">
            {loading ? ( 
                <Spinner />
            ) : ( 
                <div className="contenedor_cental">
                    <div className="img_contenedor">
                        <img src={imagen2} alt={descripcion} />
                    </div>
                    <div className="datos_contenedor">
                        <h2>{nombre}</h2>
                        <p className="descripcion">{descripcion2}</p>
                        <p className="precio">${precio}.-</p>
                        <ItemCount onAdd={handleOnAdd} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default ItemDetail;
