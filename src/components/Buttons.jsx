import React, { useState } from 'react'

const Buttons = ({text , icon, filtroCategory,cat}) => {

    const [active, setActive] = useState(false)

    const toggle = ()=>{
        setActive(!active)
    }
    
    return (
        <div onClick={toggle}>
            <button onClick={()=>filtroCategory(cat)} className={(active ? 'bg-botonActive flex items-center shadow-xl rounded-lg p-2' : 'bg-boton flex items-center shadow-xl rounded-lg p-2')}>
                <img className='w-5 mr-2' src={icon} alt="" />
                <p className='font-fredoka text-sm text-white'>{text}</p>
            </button>
        </div>
    )
}

export default Buttons