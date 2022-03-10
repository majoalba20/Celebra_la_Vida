import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import Navbar from '../components/Navbar'
import CartCard from '../components/CartCard'

const CartSummary = () => {

    const {state: {cart}} = CartState()

    const [total, setTotal] = useState();

    const [message, setMessage] = useState("")

    const createMessage = () => {
        let message = `Hola me gustaria pedir: ${cart.map((item) => {
            return (
                JSON.stringify(item.qty) + " " + JSON.stringify(item.name)
            )
        })}\n\nTOTAL: $${total}`
        message = encodeURI(message)
        return message
    }

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr) => acc+ Number(curr.precio)*curr.qty,0))
    })

    return (
        <>
            <h1 className='font-fredoka text-2xl p-5'>CARRITO DE<br />COMPRAS</h1>
            {
                cart.length>0 ? ( 
                    <>
                        <CartCard/>
                        {cart.map(c => {
                            return(
                                <div key={c.id}>
                                    <div className='font-fredoka flex justify-around'>
                                        <span>{c.name}</span>
                                        <span>x{c.qty}</span>
                                        <span>${c.qty*parseInt(c.precio)}</span>
                                    </div>
                                    
                                </div>
                            )
                        })}
                        <hr />
                        <div className='font-fredoka flex m-auto w-10/12 justify-between'>
                            <span>TOTAL</span>
                            <span>${total}</span>
                        </div>
                        <div className='w-full flex justify-center pt-6 pb-10'>
                            <a
                                onClick={() => {setMessage(createMessage)}}
                                href={`https://api.whatsapp.com/send?phone=${'+573504598741'}&text=${message}`}>
                                <button className='font-fredoka bg-botonActive shadow-xl rounded-lg p-2'>REALIZAR PEDIDO VIA <br /> WHATSAPP</button>
                            </a>
                        </div>
                    </>
                ):
                (
                    <span className='px-5 font-nunito text-mostaza'>El carrito esta vacio</span>
                )
            }
            <Navbar/>
        </>
    )
}

export default CartSummary