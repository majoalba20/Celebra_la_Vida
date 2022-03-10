import React from 'react'

const Buttons = ({text , icon, filtroCategory,cat}) => {
    
    return (
        <button onClick={()=>filtroCategory(cat)} className='flex items-center shadow-xl rounded-lg bg-boton p-2'>
            <img className='w-5 mr-2' src={icon} alt="" />
            <p className='font-fredoka text-sm text-white'>{text}</p>
        </button>
    )
}

export default Buttons