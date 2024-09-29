// import { useEffect , useState } from "react";
// import { useParams } from "react-router-dom";
// import ItemDetail from "../../components/ItemDetail";


// const Detalles = () => {
//     const { id } = useParams(null);
//     let [item, setItem] = useState();
//     useEffect(() => {
//         fetch('src/components/Data/item.json')
//             .then(resultado => resultado.json())
//             .then(data => setItem(data.find(item => item.id === Number(id))));
//     })

// return <ItemDetail {...item} />;
    
// }

// export default Detalles;