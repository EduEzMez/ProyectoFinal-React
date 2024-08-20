import Boton from "./boton"
const NavBar = () =>{
    return(
        <>
        <section className="contenedor_header">
            <section className="contenedor_mensaje">
                <div>
                    <p>DESCUENTOS DEL 20% PARA LOS DIAS VIERNES</p>
                </div>
            </section>
            <section className="contenedor_navbar">
                <div className="contenedor_logo">
                    <div>
                        <p className="logo">Key<span>!</span>Board</p>
                    </div>
                </div>
                <div className="contenedor_menu"> 
                    <a href="http://"><Boton texto="INICIO"></Boton></a>
                    <a href="http://"><Boton texto="TIENDA"></Boton></a>
                    <a href="http://"><Boton texto="AYUDA"></Boton></a>
                </div>
            </section>
        </section>
        </>
    )
}

export default NavBar;