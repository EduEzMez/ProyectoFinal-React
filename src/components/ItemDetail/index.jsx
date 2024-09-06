const ItemDetail = ({id, imagen, nombre, descripcion, precio}) => {

    return(
        <section>
            <img src={imagen} alt={descripcion} />
            <p>sdf{nombre}</p>
            <p>sdf{descripcion}</p>
            <p>sdf{precio}</p>
        </section>
    )
}

export default ItemDetail;