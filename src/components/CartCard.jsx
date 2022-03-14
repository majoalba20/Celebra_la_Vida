import React from 'react'
import { CartState } from '../context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartCard = () => {

    const {state:{cart},dispatch} = CartState()

    let productNumber = [1,2,3,4,5,6,7,8,9,10];

    const deleteMessage = ()=>{
        toast.error('Producto eliminado del carrito', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
        cart.map(c => {
            return(
                <div className='flex w-4/5 lg:w-1/6 my-4 lg:my-3 rounded-md items-center bg-fondoCard shadow-xl' key={c.id}>
                    <div className='w-2/4 flex justify-center items-center'><img className='w-11/12' src={c.img} alt=''/></div>
                    <div className='w-2/4 flex flex-col items-center gap-y-3'>
                        <div className='text-center font-fredoka'>{c.name}</div>
                        {
                            <select className='w-16 bg-white rounded-full p-2 m-auto' onChange={((e)=>{
                                dispatch({
                                    type: "CHANGE_QTY",
                                    payload: {
                                        id: c.id,
                                        qty: e.target.value
                                    }
                                })
                            })}>
                                {
                                productNumber.map(x => {
                                    return (
                                        <option key={x}>{x}</option>
                                    )})
                                }
                            </select>
                        }
                        <div onClick={deleteMessage} className='flex justify-center'>
                            <span className='font-fedora text-mostaza lg:text-center cursor-pointer' onClick={()=>{dispatch({type: "REMOVE_FROM_CART", payload:c})}}>Eliminar articulo</span>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            )
        })
    )
}

export default CartCard