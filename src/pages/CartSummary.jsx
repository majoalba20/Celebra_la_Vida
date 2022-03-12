import React, { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import Navbar from '../components/Navbar'
import CartCard from '../components/CartCard'
import NavbarTop from '../components/NavbarTop'
import Footer from '../components/Footer'
import emptyCart from '../assets/emptyCart.jpeg'

const CartSummary = () => {

    const {state: {cart}} = CartState()

    const [total, setTotal] = useState();

    const [message, setMessage] = useState("")

    const createMessage = () => {
        let message = `Hola me gustaria pedir: ${cart.map((item) => {
            return (
                " " + "("+item.qty+")" + " " + item.name
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
            <div className='lg:flex lg:justify-between lg:m-auto lg:items-center lg:w-11/12'>
                <h1 className='font-black text-4xl pt-6 lg:py-6 font-fredoka text-center'>CELEBRA LA <b className='text-mostaza'>VIDA</b></h1>
                <div className='opacity-0 lg:opacity-100 lg:w-1/4'>
                    <NavbarTop/>
                </div>
            </div>
            {
                cart.length>0 ? ( 
                    <>
                        <div className='w-full flex flex-wrap p-5 justify-center lg:gap-5'>
                            <CartCard/>
                        </div>
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
                    <>
                        <span className='px-5 font-nunito text-mostaza lg:px-16'>El carrito esta vacio</span>
                        <img className='m-auto' src={emptyCart} alt="" />
                    </>
                )
            }
            <div className='opacity-0 lg:opacity-100'>
                <Footer/>
            </div>
            <div className='lg:hidden'>
                <Navbar/>
            </div>
        </>
    )
}

export default CartSummary