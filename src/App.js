import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import CartSummary from './pages/CartSummary';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Products/:id' element={<ProductDetail/>}/>
          <Route path='/Carrito' element={<CartSummary/>}/>
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
