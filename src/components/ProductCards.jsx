import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCards = ({cardInfo}) => {

    return (
        <>
            {
            cardInfo.length==0 
            ?(
            <div className='w-full flex justify-center py-5'>
                <h1>Proximamente</h1>
            </div>
            ) 
            :(cardInfo.map((item) => {
                return (
                    <NavLink to={`/Products/${item.id}`} className='flex w-3/4 my-4 m-auto rounded-md items-center bg-fondoCard cursor-pointer md:w-1/5' key={item.id}>
                        <div className='flex'>
                            <div className='w-2/4 flex justify-center items-center'><img className='w-11/12' src={item.img} alt=''/></div>
                            <div className='w-2/4 flex justify-center items-center text-center'><b className='font-fredoka text-lg'>{item.name}</b></div>
                        </div>
                    </NavLink >
                    
                )
            }))
            }
        </>
    )
}

export default ProductCards