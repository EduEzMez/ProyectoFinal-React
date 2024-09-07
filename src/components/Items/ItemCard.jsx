
import "./itemCard-style.css"
import { Link } from "react-router-dom";

const Item = ({ id, imagen, nombre, descripcion, precio }) => {
    return(
        <Link to={`/detalles/${id}`}>
        <section className="card_contenedor">
            
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
        </section>
        </Link>
    )
}

export default Item;