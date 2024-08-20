import Button from "../Button"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>{
    return(
        <>
        <section className="contenedor_header">
            <section className="contenedor_mensaje">
                <div>
                    <p>DESCUENTO DEL 20% CON TODOS LOS MEDIOS DE PAGOS</p>
                </div>
            </section>
            <section className="contenedor_navbar">
                <div className="contenedor_logo">
                    <div>
                        <p className="logo">Key<span>!</span>Board</p>
                    </div>
                </div>
                <div className="contenedor_menu"> 
                    <a href="index.html"><Button texto="INICIO"></Button></a>
                    <a href="index.html"><Button texto="TIENDA"></Button></a>
                    <a href="index.html"><Button texto="AYUDA"></Button></a>
                    <CartWidget></CartWidget>
                </div>
            </section>
        </section>
        </>
    )
}

export default NavBar;