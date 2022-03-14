import React from 'react'
import Navbar from '../components/Navbar'
import CarouselImage from '../components/CarouselImage'
import NavbarTop from '../components/NavbarTop'
import Footer from '../components/Footer'
import homeImageLg from '../assets/Homelg.png'

const Home = () => {

    return (
        <>
            <div className='lg:flex lg:justify-between lg:m-auto lg:items-center lg:w-11/12'>
                <h1 className='font-black text-4xl py-6 font-fredoka text-center'>CELEBRA LA <b className='text-mostaza'>VIDA</b></h1>
                <div className='opacity-0 lg:opacity-100 lg:w-1/4'>
                    <NavbarTop/>
                </div>
            </div>
            <div className='h-50 lg:hidden'>
                <CarouselImage/>
            </div>
            <div className='lg:flex lg:w-10/12 lg:m-auto'>
                <div className='lg:w-1/2'>
                    <div className='lg:w-9/12 lg:m-auto'>
                        <h3 className='font-fredoka font-black py-4 pl-3'>HOLA SOY XIOMARA ALBA NIÑO.</h3>
                        <p className='font-nunito px-3'> Quiero darte la bienvenida al emprendimiento <b className='text-rosapalo'>"CELEBRA LA VIDA"</b>, 
                                creado para ti con mucho amor; porque <b className='text-beige'>LA FELICIDAD SE LLEVA POR DENTRO</b>, 
                                en donde celebraremos contigo, no solo tu llegada a este mundo, 
                                sino todos tus logros, triunfos y alegrías, con exquisitas tortas 
                                tradicionales, sugar free, cupcakes y chocolateria, elaboradas con 
                                materia prima de la mejor calidad. La finalidad de nuestros 
                                productos es invitarte a disfrutar, amar, agradecer, soñar y gozar 
                                cada minuto de vida que Dios te ha dado.
                        </p>
                    </div>
                </div>
                <div className='opacity-0 lg:opacity-100 w-1/2 lg:flex lg:justify-center'>
                    <img className='w-5/6' src={homeImageLg} alt="" />
                </div>
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

export default Home