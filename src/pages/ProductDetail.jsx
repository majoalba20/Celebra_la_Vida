import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CounterButton from '../components/CounterButton'

const ProductDetail = ({cardInfo}) => {

    let {id} = useParams()

    const [detail,setDetail] = useState({})

    const setInfo = ()=>{
        for (let i = 0; i < cardInfo.length; i++) {
            if (cardInfo[i].id == id) {
                setDetail(cardInfo[i])
            }
        }
    }

    useEffect(() => {
        setInfo()
    },[])

    return (
        <div className='bg-fondoDetail'>
            <div className='flex justify-between items-center w-11/12 m-auto p-3'>
                <Link to={'/Products'}><svg className="w-8 h-8" fill="none" stroke="#2F363D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg></Link>
                <svg className="w-6 h-6" fill="none" stroke="#2F363D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h1 className='font-fredoka font-black text-xl px-7'>{detail.name}</h1>
            <p className='font-nunito px-7 py-2'>{detail.descripcion}</p>
            <img className='w-3/5 m-auto' src={detail.img} alt="" />
            <div style={{height:'40vh'}} className='w-full rounded-t-3xl h-3/6 bg-white flex flex-col justify-around'>
                <p className='font-fredoka font-black text-mostaza text-4xl'>{detail.precio}</p> <br/> 
                <p className='font-fredoka text-xs'>TAMAÑO DEL PASTEL</p> <br/> 
                <div className='flex justify-center'>
                    <select className='w-11/12 rounded-full border-2 border-black/50 p-1 bg-white' name="porciones">
                        <option>6 porciones</option>
                        <option>10 porciones</option>
                    </select> 
                </div>
                <div className='flex justify-around items-center'>
                    <CounterButton/>
                    <button className='bg-botonActive rounded-full px-5 py-2 font-fedora font-black'>Añadir al carrito</button>
                </div>
            </div>
        </div>
        
    )
}

export default ProductDetail