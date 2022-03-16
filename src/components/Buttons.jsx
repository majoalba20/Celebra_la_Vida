import React from 'react'

const Buttons = ({ text, icon, filtroCategory, cat, setButtonActive, buttonActive}) => {

    return (
        <div onClick={()=>setButtonActive(text)}>
            <button onClick={() => filtroCategory(cat)} className={(buttonActive === text ? 'bg-botonActive flex items-center shadow-xl rounded-lg p-2' : 'bg-boton flex items-center shadow-xl rounded-lg p-2')}>
                <img className='w-5 mr-2' src={icon} alt="" />
                <p className='font-fredoka text-sm text-white'>{text}</p>
            </button>
        </div>
    )
}

export default Buttons