import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";
import Ayuda from "./Pages/Ayuda"
// import Error from './Pages/Error/Error';
import Detalles from './Pages/Detalles/Detalles';
import './App.css'
import Home from './Pages/Home';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';


function App() {
  return (
      <BrowserRouter basename="/ProyectoFinal-React">
        <CartProvider>
          <NavBar></NavBar>
          <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/tienda' element={<ItemListContainer greeting={'Nuestra Tienda'}/>}/>
          <Route exact path='/detalles/:id' element={<Detalles/>}/>
          <Route exact path="/carrito" element={<Cart/>} />
          <Route exact path='/ayuda' element={<Ayuda/>}/>
          {/* <Route path='*' element={<Error />}/> */}
          </Routes>
        </CartProvider>
      </BrowserRouter>
  )
}

export default App;



