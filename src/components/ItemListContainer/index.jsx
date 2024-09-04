import "./itemlist.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div className="saludo-contenedor">
            <h1 className="item_list1">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;