import Button from "../Button"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import "./navbar-style.css"

const NavBar = () =>{
    return(
        <>
        <header>
            <section className="contenedor_header">
                <section className="contenedor_mensaje">
                    <div>
                        <p>20% DE DESCUENTO CON TODOS LOS MEDIOS DE PAGOS</p>
                    </div>
            </section>
            <section className="contenedor_navbar">
                <div className="contenedor_logo">
                    <div>
                        <p className="logo">Key<span>!</span>Board</p>
                    </div>
                </div>
                <div className="contenedor_menu"> 
                    <Link to={"/"}><Button texto="INICIO"></Button></Link> 
                    <Link to={"/tienda"}><Button texto="TIENDA"></Button></Link>
                    <Link to={"/ayuda"}><Button texto="AYUDA"></Button></Link>
                    <CartWidget></CartWidget>
                </div>
            </section>
            </section>
        </header>
        </>
    )
}

export default NavBar;