import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, imagen, nombre, descripcion, precio }) => {
    return(
        <section>
            <img src={imagen} alt={descripcion} />
            <p>nombre{nombre}</p>
            <p>descriptcion{descripcion}</p>
            <p>precio{precio}</p>
            <ItemCount></ItemCount>
        </section>
    )
}

export default ItemDetail;