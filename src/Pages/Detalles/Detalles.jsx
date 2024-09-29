import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import "./detalles-style.css";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../components/config/firebase.config"

const Detalles = () => {
    let [producto, setProducto] = useState(null);
    const { id } = useParams();
    console.log(id);
    
    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const itemRef = doc(db, 'items', id); 
                const snapshot = await getDoc(itemRef);
                if (snapshot.exists()) {
                    setProducto({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.log("El producto no existe");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        fetchProducto();
    }, [id]); 

    return (
        <section>
            {producto ? (
                <ItemDetail {...producto} />
            ) : (
                <div className="error_contenedor">
                    <img src="../public/assets/error.png" alt="" />
                    <p className="error_producto">Producto no encontrado</p>
                </div>
            )}
        </section>
    );
}

export default Detalles;

