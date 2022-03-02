import React, {useState} from 'react'
import ProductCards from '../components/ProductCards'
import ButonSection from '../components/ButonSection'

import chocolate from '../assets/Chocolate.png'
import limon from '../assets/Limon.png'
import zanahoria from '../assets/Zanahoria.png'

const Products = () => {

    const [searchItem, setSearchItem] = useState('')

    const cardInfo = [{
        "id": 1,
        "name": "Torta de Cafe",
        "img": chocolate,
        "category": "Cake"
    },
    {
        "id": 2,
        "name": "Torta de Zanahoria",
        "img": limon,
        "category": "Cake"
    },
    {
        "id": 3,
        "name": "Torta Red Velvet",
        "img": zanahoria,
        "category": "Cake"
    },
    {
        "id": 4,
        "name": "Bola Navideña",
        "img": chocolate,
        "category": "Chocolate"
    },
    {
        "id": 5,
        "name": "Torta de Chocolate",
        "img": limon,
        "category": "Cake"
    },
    {
        "id": 6,
        "name": "Corazon Relleno",
        "img": zanahoria,
        "category": "Chocolate"
    },{
        "id": 7,
        "name": "Torta de Vino",
        "img": chocolate,
        "category": "Cake"
    },
    {
        "id": 8,
        "name": "Torta de Amapola",
        "img": limon,
        "category": "Cake"
    },
    {
        "id": 9,
        "name": "Torta de Limon",
        "img": zanahoria,
        "category": "Cake"
    },
    {
        "id": 10,
        "name": "Cupcake de Kinder",
        "img": chocolate,
        "category": "Cupcake"
    }]

    return (
        <>
            <h1 className='font-black text-4xl py-6 font-fredoka text-center'>CELEBRA LA <b className='text-mostaza'>VIDA</b></h1>
            <div className='flex justify-around items-center w-4/5 m-auto'>
                <input type="text" className='rounded-full p-1 border-2 border-black/50 w-11/12' placeholder='Search Cakes...' onChange={(e)=>setSearchItem(e.target.value)}/>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <p className='font-fredoka font-black pl-8 py-4'>Categorias</p>
            <ButonSection/>
            <ProductCards searchItem={searchItem} cardInfo={cardInfo}/>
        </>
    )
}

export default Products