import { useState, useEffect } from "react";
import Item from "./ItemCard";
import "./itemCard-style.css"

const ItemList = () => {
    let [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./public/item.json')
        .then(resultado => resultado.json())
        .then(data => setItems(data))
    },[])

    return(
        <section className="contenedor_cards">
            {items.map(item => <Item key={item.id} {...item}></Item>)}
        </section>
    );
}

export default ItemList;