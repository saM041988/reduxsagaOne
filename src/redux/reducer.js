import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constants";

export const cartItem = (data=[], action) => {
    // if (action.type===ADD_TO_CART) {
    //     console.log('reducer', action);
    //     return action.data
    // } else {
    //     return "No action match"
    // }
    switch(action.type) {
        case ADD_TO_CART:
            console.log('reducer', action);
            return [action.data, ...data];
        case REMOVE_TO_CART:
            console.log('remove reducer', action);
            // data.length=data.length ? data.length-1 : [];
            const remainingItem = data.filter((item)=>item.id!==action.data)
            return [...remainingItem];
        case EMPTY_CART:
            console.log('empty reducer', action);
            data=[]
            return [...data];
        default:
            return data;
    }
}