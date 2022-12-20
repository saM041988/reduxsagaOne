import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constants";

export const addToCart = (data) => {
    console.log('hello abc', data)
    return {
        type : ADD_TO_CART,
        data
    }
}
export const removeToCart = (data) => {
    console.log('hello abc', data)
    return {
        type : REMOVE_TO_CART,
        data
    }
}
export const emptyCart = () => {
    console.log('hello abc')
    return {
        type : EMPTY_CART,
    }
}