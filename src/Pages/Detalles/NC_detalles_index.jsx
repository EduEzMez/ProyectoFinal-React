import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { doc, getDoc } from 'firebase/firestore'; // Importá las funciones correctas
import { db } from "../config/firebase.config";

const Detalles = () => {
    const { id } = useParams(); // id que viene de la URL
    let [item, setItem] = useState(null); // Por defecto null hasta que traigamos el dato
    let [loading, setLoading] = useState(true); // Para manejar el estado de carga

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const itemRef = doc(db, 'items', id); // Referencia al documento por su id
                const snapshot = await getDoc(itemRef); // Obtener el documento
                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() }); // Setear el item en el estado
                } else {
                    console.log("El item no existe");
                }
            } catch (error) {
                console.error("Error al obtener el documento:", error);
            } finally {
                setLoading(false); // Dejar de cargar
            }
        };

        fetchItem();
    }, [id]); // Solo se ejecuta cuando el id cambia

    if (loading) {
        return <p>Cargando...</p>; // Mostramos un mensaje de carga mientras espera los datos
    }

    if (!item) {
        return <p>El ítem no existe</p>; // En caso de que no haya un ítem con ese id
    }

    return <ItemDetail {...item} />; // Renderizamos el detalle cuando los datos están listos
}

export default Detalles;
