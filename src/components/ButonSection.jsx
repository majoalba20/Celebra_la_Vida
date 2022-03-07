import React from 'react'
import Buttons from './Buttons'

let Cupcake = "https://img.icons8.com/ios-glyphs/30/000000/cupcake.png"
let Cake = "https://img.icons8.com/material-rounded/24/000000/birthday-cake.png"
let Chocolate = "https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-chocolate-bad-habits-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
let CakeFree = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACUUlEQVRoge3ZS2sTURjG8V9qLS2tWtSNolAQwY0bL1URBP0KXnCrCG7Fhbt6+RReQMWl4FIQKSi4kCLeEF24qkJaq7Yru9BaqYuZkDHJSTNp0knr/OGFmTlnznkehrznPSe0ly48jqOrzXO1lXNYiONsxlqaZiO+KRuZxuZMFTXJLWUTpbieqaIm2IF51UbmsTNDXam5qdrEivsqBcwIG5mxQjLYkLCJUgxlpi4FA/glbOIn+jNTl5J7wkbuZKgrNYMYU23iOTa0Y8JCOwaN6cZpHBWZeIr7ohSck/M/cxGzwllrFhcyU5eCeiZK8aPVk7Yjay1kMfeKqHkaITfSaXQ32G8N9mArelo098lF2ucwgTf4s9TJ+nBZtN9eLBO1K6Yxgt5mTWzCiwwNVMaY6EAjFQU86QDxlTEqZdo+VTHAa1EVu5wbon4cw9sKLSfSDPIo8WJRtL/IivX4nNDzMM3L3xMvjrRcWnquKOv5WqtDaB1Zl7iebLGoZigmrmvuMENGkuL3Bfr0CK8pA3VEhdrqjTecuC4G+tTkhvKnnMOhivZBUQYZVf37OYApXPJvhinEz6biPo2OdzjWUNJT84AvlMp24R3Wxve/cRsvsQ3nsSVu+yIyXsRBnFGuGJ7hQTzPcRyJn8/jrmht2B4YbwL7Raf4SR278TGguybXZL9uVMbVkNh6ReP7NK6XiQ+hhlVT/eZGOo3cSKfxXxjphBqrklTlSYk+fJL9IliKcUvY7g53iJlxUbkSpJFtYy/2ik5QsmASr0R/2eXk5OSsEv4CZPdwxDhVu1AAAAAASUVORK5CYII="


const ButonSection = ({filtroCategory}) => {

    return (
        <div className='flex flex-wrap w-11/12 gap-2 pl-8'>
            <button className='font-fredoka text-sm text-white shadow-xl rounded-lg bg-boton p-2'>All</button>
            <Buttons cat='Cake' filtroCategory={filtroCategory} text='Cakes' icon={Cake}/>
            <Buttons cat='SugarFree' filtroCategory={filtroCategory} text='Cakes Sugar Free' icon={CakeFree}/>
            <Buttons cat='Cupcake' filtroCategory={filtroCategory} text='Cupcakes' icon={Cupcake}/>
            <Buttons cat='Chocolate' filtroCategory={filtroCategory} text='Chocolateria' icon={Chocolate}/>
        </div>
    )
}

export default ButonSection