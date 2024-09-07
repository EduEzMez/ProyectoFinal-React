import "./card-style.css"
import ItemCount from "../ItemCount/ItemCount";

const Card = (prop) => {
    return(
        <section className="card_contenedor">
            <div className="imagen_contenedor">
                <img className="card_img" src={prop.src} alt="Carta de producto" />
            </div>
            <div className="titulo_contenedor">
                <h3 className="card_titulo">{prop.titulo}</h3>
            </div>
            <p className="card_parrafo">{prop.parrafo}</p>
            <ItemCount></ItemCount>
        </section>
    )
}

export default Card;