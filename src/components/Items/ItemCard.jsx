import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./itemCard-style.css"

const Item = ({ id, imagen, nombre, descripcion, precio }) => {
    return(
        <section className="card_contenedor">
            {/* <Link to={`/detalle/${id}`}> */}
            <div className="imagen_contenedor">
                <img className="card_img" src={imagen} alt={descripcion} />
            </div>
            <div className="titulo_contenedor">
                <h3>{nombre}</h3>
            </div>
            <div className="card_parrafo">
                <p className="descripcion">{descripcion}</p>
            </div>
            <h4>{precio}</h4>
            <ItemCount></ItemCount>
            {/* </Link> */}
        </section>
    )
}

export default Item;