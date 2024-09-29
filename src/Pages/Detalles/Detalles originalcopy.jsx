// import { useEffect , useState } from "react";
// import { useParams } from "react-router-dom";
// import ItemDetail from "../../components/ItemDetail";
// import "./detalles-style.css"

// const Detalles = () => {
//     let [producto, setProducto] = useState();

//     const { id } = useParams(null);
//     console.log(id)
    
//     useEffect(() => {
//         // fetch('../public/item.json') 
//         fetch('../src/components/Data/item.json') 
//             .then(resultado => resultado.json())
//             .then(data => setProducto(data.find(item => item.id == id )));
//     },[id]);
    

//     return (
        
//         <section>
//             {producto ? <ItemDetail {...producto} /> : <div className="error_contenedor"><img src="../public/assets/error.png" alt="" /><p className="error_producto">Producto no encontrado</p></div>}
//         </section>
//     )
// }

// export default Detalles;
