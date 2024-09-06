const ItemDetail = ({ id, imagen, nombre, descripcion, precio}) => {
    return(
        <section>
            <img src={imagen} alt={descripcion} />
            <p>-ssssssssssss{nombre}</p>
            <p>-sssssssssssss{descripcion}</p>
            <p>-ssssssssssssss{precio}</p>
        </section>
    )
}

export default ItemDetail;