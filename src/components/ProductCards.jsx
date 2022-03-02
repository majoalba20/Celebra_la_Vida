import React from 'react'

const ProductCards = ({cardInfo, searchItem}) => {
    return (
        <>
            {
            cardInfo.filter((item)=>{
                if(item === ''){return item}
                else if(item.name.toLowerCase().includes(searchItem.toLowerCase())){return item}
            }).map((item) => {
                return (
                    <div className='flex w-3/4 my-4 m-auto rounded-md items-center bg-fondoCard' key={item.id}>
                        <img className='w-1/2' src={item.img} alt=''/>
                        <b className='font-fredoka text-3xl font-black'>{item.name}</b>
                    </div>
                )
            })}
        </>
    )
}

export default ProductCards