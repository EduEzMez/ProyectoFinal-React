import "./card-style.css"
import Button from "../Button";

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
            <Button texto="Comprar"></Button>
        </section>
    )
}

export default Card;