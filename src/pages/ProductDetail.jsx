import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = () => {

    let {id} = useParams()

    const {state:{cardInfo,cart},dispatch} = CartState()

    const [detail,setDetail] = useState({})

    const setInfo = ()=>{
        for (let i = 0; i < cardInfo.length; i++) {
            if (cardInfo[i].id == id) {
                setDetail(cardInfo[i])
            }
        }
    }

    const showMessage = ()=>{
        toast.success('🎂 Producto añadido al carrito!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    useEffect(() => {
        setInfo()
    },[])

    return (
        <div className='bg-fondoDetail lg:h-screen'>
            <div className='flex justify-between lg:w-1/6 lg:justify-around items-center w-full p-3'>
                <Link to={'/Products'}><svg className="w-8 h-8" fill="none" stroke="#2F363D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg></Link>
                <Link to={'/Carrito'}>
                    <div className='flex'>
                        <svg className="w-6 h-6" fill="none" stroke="#2F363D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <p className='w-3.5 rounded-full h-3.5 bg-red-600 flex justify-center items-center text-white text-xs'>{cart.length}</p>
                    </div>
                </Link>
            </div>

            <h1 className='font-fredoka font-black text-xl px-7 lg:text-center'>{detail.name}</h1>
            <p className='font-nunito px-7 py-2 lg:px-16'>{detail.descripcion}</p>
            
            <div className='lg:flex lg:items-center'>
                <div className='flex justify-center lg:w-1/2'>
                    <img className='w-9/12 lg:w-3/6 z-10' src={detail.img} alt="" />
                </div>
                <div className='lg:w-1/2 lg:m-auto'>
                    <div className='w-full lg:w-11/12 rounded-t-3xl h-3/6 lg:h-96 lg:rounded-lg bg-white flex flex-col lg:items-center lg:justify-around lg:relative fixed bottom-0'>
                        <div className='px-6 lg:pt-0 pt-36'>
                            <p className='font-fredoka font-black text-mostaza text-4xl'>${detail.precio}</p> <br/> 
                            <p className='font-fredoka text-xs'>TAMAÑO DEL PASTEL</p>
                        </div>
                        <div className='flex justify-center'>
                            <select className='w-11/12 rounded-full border-2 border-black/50 p-1 bg-white' name="porciones">
                                <option>6 porciones</option>
                                <option>10 porciones</option>
                            </select> 
                        </div>
                        <div className='w-full flex lg:justify-center' onClick={showMessage}>
                            <button onClick={()=>{dispatch({type: "ADD_TO_CART", payload:detail})}} className='bg-botonActive rounded-full lg:w-1/4 w-1/2 px-2 py-4 font-fedora m-auto lg:m-0 font-black'>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ProductDetail