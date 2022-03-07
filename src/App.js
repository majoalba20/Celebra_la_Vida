import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Products from './pages/Products'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

import chocolate from './assets/Chocolate.png'
import limon from './assets/Limon.png'
import zanahoria from './assets/Zanahoria.png'

function App() {

  const [cardInfo,setCardInfo] = useState([{
    "id": 1,
    "name": "COFFE CAKE",
    "img": chocolate,
    "category": "Cake",
    "descripcion": "Torta de Café con relleno y decoración de Buttercream de café y chocolate.",
    "precio": "$60.000"
  },
  {
    "id": 2,
    "name": "VANILLA CAKE",
    "img": limon,
    "category": "Cake",
    "descripcion": "Torta de vainilla con relleno de pistacho, decorada con Buttercream de frutos rojos.",
    "precio": "$60.000"
  },
  {
    "id": 3,
    "name": "WINE CAKE",
    "img": zanahoria,
    "category": "Cake",
    "descripcion": "Torta de vino con frutos secos.",
    "precio": "$60.000"
  },
  {
    "id": 4,
    "name": "TRADITIONAL CAKE",
    "img": chocolate,
    "category": "Cake",
    "descripcion": "Torta tradicional de vainilla con cubierta de merengue suizo y relleno de arequipe.",
    "precio": "$60.000"
  },
  {
    "id": 5,
    "name": "CHOCOLATE CAKE",
    "img": limon,
    "category": "Cake",
    "descripcion": "Torta de chocolate cubierto de ganache de chocolate.",
    "precio": "$60.000"
  },
  {
    "id": 6,
    "name": "LEMON & POPPY CAKE",
    "img": zanahoria,
    "category": "Cake",
    "descripcion": "Torta de limón y amapola rellena de Buttermilk",
    "precio": "$60.000"
  },
  {
    "id": 7,
    "name": "CARROT CAKE",
    "img": zanahoria,
    "category": "Cake",
    "descripcion": "Torta de Zanahoria cubierta de frosting de queso crema",
    "precio": "$60.000"
  }])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Products' element={<Products cardInfo={cardInfo} setCardInfo={setCardInfo}/>}/>
          <Route path='/Products/:id' element={<ProductDetail cardInfo={cardInfo}/>}/>
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
