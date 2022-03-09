import React, {useState} from 'react'
import ProductCards from '../components/ProductCards'
import ButonSection from '../components/ButonSection'
import Navbar from '../components/Navbar'
import { CartState } from '../context/Context'

const Products = () => {

    const {state:{cardInfo}} = CartState()

    const [info,setCardInfo] = useState(cardInfo)

    const filtroCategory = (c)=>{
        const result = cardInfo.filter((cat) => 
        {
            return cat.category === c;
        });
        setCardInfo(result)
    }

    return (
        <>
            <h1 className='font-black text-4xl pt-6 font-fredoka text-center'>CELEBRA LA <b className='text-mostaza'>VIDA</b></h1>
            <p className='font-fredoka font-black pl-8 py-4'>Categorias</p>
            <ButonSection filtroCategory={filtroCategory} />
            <ProductCards cardInfo={info}/>
            <Navbar/>
        </>
    )
}

export default Products