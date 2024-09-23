import "./idetail-style.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, imagen2, nombre, descripcion2, precio }) => {
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
                <ItemCount></ItemCount>
            </div>
        </div>  
        </section>
    )
}

export default ItemDetail;