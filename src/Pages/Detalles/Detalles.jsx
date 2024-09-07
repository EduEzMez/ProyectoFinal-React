import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";

const Detalles = () => {
    let [producto, setProducto] = useState();

    const { id } = useParams(null);
    console.log(id)
    
    useEffect(() => {
        fetch('../public/item.json') 
            .then(resultado => resultado.json())
            .then(data => setProducto(data.find(item => item.id == id )));
    },[id]);
    

    return (
        
        <section>
            {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
        </section>
    )
}

export default Detalles;
