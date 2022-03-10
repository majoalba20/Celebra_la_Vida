import React from 'react'
import Navbar from '../components/Navbar'
import CarouselImage from '../components/CarouselImage'

const Home = () => {
    return (
        <>
            <h1 className='font-black text-4xl py-6 font-fredoka text-center'>CELEBRA LA <b className='text-mostaza'>VIDA</b></h1>
            <div className='h-50 lg:hidden'>
                <CarouselImage/>
            </div>
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
            <Navbar/>
        </>
    )
}

export default Home