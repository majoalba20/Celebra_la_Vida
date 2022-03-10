import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

import cafe from '../assets/cafe.png'
import vanilla from '../assets/vainilla.png'
import vino from '../assets/vino.png'
import traditional from '../assets/tradicional.png'
import chocolate from '../assets/chocolate.png'
import lemonAmapola from '../assets/lemonAmapola.png'
import zanahoria from '../assets/Zanahoria.png'

const Cart = createContext()

const Context = ({ children }) => {

    const cardInfo = [{
        "id": 1,
        "name": "COFFE CAKE",
        "img": cafe,
        "category": "Cake",
        "descripcion": "Torta de Café con relleno y decoración de Buttercream de café y chocolate.",
        "precio": "60000"
    },
    {
        "id": 2,
        "name": "VANILLA CAKE",
        "img": vanilla,
        "category": "Cake",
        "descripcion": "Torta de vainilla con relleno de pistacho, decorada con Buttercream de frutos rojos.",
        "precio": "60000"
    },
    {
        "id": 3,
        "name": "WINE CAKE",
        "img": vino,
        "category": "Cake",
        "descripcion": "Torta de vino con frutos secos.",
        "precio": "60000"
    },
    {
        "id": 4,
        "name": "TRADITIONAL CAKE",
        "img": traditional,
        "category": "Cake",
        "descripcion": "Torta tradicional de vainilla con cubierta de merengue suizo y relleno de arequipe.",
        "precio": "60000"
    },
    {
        "id": 5,
        "name": "CHOCOLATE CAKE",
        "img": chocolate,
        "category": "Cake",
        "descripcion": "Torta de chocolate cubierto de ganache de chocolate.",
        "precio": "60000"
    },
    {
        "id": 6,
        "name": "LEMON AND POPPY CAKE",
        "img": lemonAmapola,
        "category": "Cake",
        "descripcion": "Torta de limón y amapola rellena de Buttermilk",
        "precio": "60000"
    },
    {
        "id": 7,
        "name": "CARROT CAKE",
        "img": zanahoria,
        "category": "Cake",
        "descripcion": "Torta de Zanahoria cubierta de frosting de queso crema",
        "precio": "60000"
    }]

    const [state,dispatch] = useReducer(cartReducer,{
        cardInfo: cardInfo,
        cart: []
    })

    return (
        <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
    )
}

export default Context

export const CartState = () =>{
    return useContext(Cart)
}