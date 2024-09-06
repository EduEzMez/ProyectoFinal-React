import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import ItemList from './components/Items/Card';
import Home from './Pages/Home';
import './App.css'
import Store from './Pages/Store';


function App() {

  return (
    <>
      <BrowserRouter basename="/ProyectoFinal-React">
        <NavBar></NavBar>
        <ItemListContainer greeting = {'BIENVENIDO A NUESTRA TIENDA'}>
        </ItemListContainer>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/tienda' element={<ItemList />} />
        <Route exact path='/tienda/items' element={<ItemList />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
