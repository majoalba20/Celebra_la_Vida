import React from 'react'

const Buttons = ({text , icon}) => {
    return (
        <button className='flex shadow-xl rounded-lg bg-boton p-2'>
            <img className='w-5 mr-2' src={icon} alt="" />
            <p className='font-fredoka font-black text-white'>{text}</p>
        </button>
    )
}

export default Buttons