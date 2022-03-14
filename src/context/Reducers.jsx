export const cartReducer = (state,action) =>{
    switch (action.type) {
        case "ADD_TO_CART":
            let itemCart = state.cart.find(p => p.id === action.payload.id)
            return itemCart ? 
            ({...state,cart:state.cart.map(item => item.id === action.payload.id
                ? {...item, qty:item.qty + 1} : item)}) 
            :({...state,cart:[...state.cart,{...action.payload, qty: 1}]})
        case "REMOVE_FROM_CART":
            return {...state,cart:state.cart.filter(c => c.id!==action.payload.id)}
        case "CHANGE_QTY":
            return {...state,cart:state.cart.filter(c => c.id===action.payload.id ? (c.qty = action.payload.qty) : c.qty)}
        default:
            return state;
    }
}