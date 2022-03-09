import React, {useState} from 'react'
import ProductCards from '../components/ProductCards'
import ButonSection from '../components/ButonSection'
import Navbar from '../components/Navbar'
import { CartState } from '../context/Context'

const Products = () => {

    const {state:{cardInfo}} = CartState()

    const [searchItem, setSearchItem] = useState('')

    // const filtroCategory = (c)=>{
    //     const result = cardInfo.filter((cat) => 
    //     {
    //         return cat.category === c;
    //     });
    //     setCardInfo(result)
    // }

    return (
        <>
            <h1 className='font-black text-4xl py-6 font-fredoka text-center'>CELEBRA LA <b className='text-mostaza'>VIDA</b></h1>
            <div className='flex justify-around items-center w-4/5 m-auto'>
                <input type="text" className='rounded-full p-1 border-2 border-black/50 w-11/12' placeholder='Search Cakes...' onChange={(e)=>setSearchItem(e.target.value)}/>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <p className='font-fredoka font-black pl-8 py-4'>Categorias</p>
            <ButonSection />
            <ProductCards searchItem={searchItem} cardInfo={cardInfo}/>
            <Navbar/>
        </>
    )
}

export default Products