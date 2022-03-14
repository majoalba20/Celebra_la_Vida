import React, {useState} from 'react'
import ProductCards from '../components/ProductCards'
import ButonSection from '../components/ButonSection'
import Navbar from '../components/Navbar'
import { CartState } from '../context/Context'
import NavbarTop from '../components/NavbarTop'
import Footer from '../components/Footer'

const Products = () => {

    const {state:{cardInfo}} = CartState()

    const [info,setCardInfo] = useState(cardInfo)

    const filtroCategory = (c)=>{
        const result = cardInfo.filter((cat) => 
        {
            return cat.category === c
        });
        setCardInfo(result)
    }

    return (
        <>
            <div className='lg:flex lg:justify-between lg:m-auto lg:items-center lg:w-11/12'>
                <h1 className='font-black text-4xl lg:py-6 pt-6 font-fredoka text-center'>CELEBRA LA <b className='text-mostaza'>VIDA</b></h1>
                <div className='opacity-0 lg:opacity-100 lg:w-1/4'>
                    <NavbarTop/>
                </div>
            </div>
            <p className='font-fredoka font-black pl-8 pb-4 lg:hidden'>Categorias</p>
            <ButonSection filtroCategory={filtroCategory} setCardInfo={setCardInfo}/>
            <div className='md:flex md:flex-wrap md:h-1/2 md:w-11/12 md:gap-2 md:m-auto md:my-6'>
                <ProductCards cardInfo={info}/>
            </div>
            <div className='opacity-0 lg:opacity-100'>
                <Footer/>
            </div>
            <div className='lg:hidden'>
                <Navbar/>
            </div>
        </>
    )
}

export default Products