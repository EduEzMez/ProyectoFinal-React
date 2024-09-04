import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import Card from './components/Card/Card';
import ItemList from './components/Items/Card';
import './App.css'

function App() {

  return (
    <>
    <header>
      <NavBar></NavBar>
      <ItemListContainer greeting = {'BIENVENIDO A NUESTRA TIENDA'}>
      </ItemListContainer>
    </header>

    <section>
      <ItemList></ItemList>
    </section>
    </>
  )
}

export default App
