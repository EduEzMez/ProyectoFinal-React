import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import Card from './components/Card/Card';
import './App.css'

function App() {

  return (
    <>
    <header>
      <NavBar></NavBar>
      <ItemListContainer greeting = {'BIENVENIDO A NUESTRA TIENDA'}>
      </ItemListContainer>
    </header>

      <section className='main_contenedor'>
        <Card titulo="Teclado 1" src="./src/assets/img1.webp" parrafo="loren"></Card>
        <Card titulo="Teclado 2" src="./src/assets/img2.webp" parrafo="loren"></Card>
        <Card titulo="Teclaso 3" src="./src/assets/img3.webp" parrafo="loren"></Card>
        <Card titulo="Teclado 4" src="./src/assets/img4.webp" parrafo="loren"></Card>
      </section>
    </>
  )
}

export default App
