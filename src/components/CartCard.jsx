import React from 'react'
import { CartState } from '../context/Context'
import CounterButton from './CounterButton'

const CartCard = () => {

    const {state:{cart},dispatch} = CartState()

    return (
        cart.map(c => {
            return(
                <div className='flex w-4/5 my-4 m-auto rounded-md items-center bg-fondoCard' key={c.id}>
                    <div className='w-2/4 flex justify-center items-center'><img className='w-11/12' src={c.img} alt=''/></div>
                    <div className='w-2/4 flex flex-col items-center gap-y-3'>
                        <div className='text-center font-fredoka'>{c.name}</div>
                        <CounterButton/>
                        <span className='font-fedora text-mostaza cursor-pointer' onClick={()=>{dispatch({type: "REMOVE_FROM_CART", payload:c})}}>Eliminar articulo</span>
                    </div>
                </div>
            )
        })
    )
}

export default CartCard