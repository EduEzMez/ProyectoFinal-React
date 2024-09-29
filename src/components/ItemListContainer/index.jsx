import { useState, useEffect } from "react";
import Item from "../Items/ItemCard";
import "../Items/itemCard-style.css";
import "./itemlist.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../config/firebase.config";

const ItemListContainer = ({ greeting }) => {
    let [items, setItems] = useState([]);
    let [loading, setLoading] = useState(true); // Estado para el loading

    useEffect(() => {
        const itemsCollection = collection(db, 'items');
        getDocs(itemsCollection)
        .then((snapshot) => {
            setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        })
        .finally(() => {
            setLoading(false); // Terminamos de cargar los datos
        });
    }, []);

    return (
        <>
            <div className="saludo-contenedor">
                <h1 className="item_list1">{greeting}</h1>
            </div>
            <section className="contenedor_cards">
                {loading ? ( 
                    <div className="spinner-contenedor">
                        <div className="spinner"></div> {/* Spinner */}
                    </div>
                ) : (
                    items.map(item => <Item key={item.id} {...item}></Item>)
                )}
            </section>
        </>
    );
}

export default ItemListContainer;
