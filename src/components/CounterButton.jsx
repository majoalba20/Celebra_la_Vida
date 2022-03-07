import React from 'react'

const CounterButton = () => {
    return (
            <div className='border-2 h-6 rounded-full border-black flex w-16 justify-around items-center'>
                <button className='border-r border-black pr-2'>-</button>
                <p>5</p>
                <button className='border-l border-black pl-2'>+</button>
            </div>
    )
}

export default CounterButton