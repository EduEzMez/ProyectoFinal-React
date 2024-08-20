import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import './App.css'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting = {'BIENVENIDO A NUESTRA TIENDA'}></ItemListContainer>
    </>
  )
}

export default App
