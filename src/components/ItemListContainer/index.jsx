import { useState, useEffect } from "react";
import Item from "../Items/ItemCard";
import "../Items/itemCard-style.css"
import "./itemlist.css"

const ItemListContainer = ({greeting}) => {
    let [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./src/components/Data/item.json')
        .then(resultado => resultado.json())
        .then(data => setItems(data))
    },[])


    return (
        <>
            <div className="saludo-contenedor">
                <h1 className="item_list1">{greeting}</h1>
            </div>
            <section className="contenedor_cards">
                {items.map(item => <Item key={item.id} {...item}></Item>)}
            </section>  
        </>

    )
}

export default ItemListContainer;