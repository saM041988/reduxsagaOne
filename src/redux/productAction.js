import { PRODUCT_LIST, PRODUCT_SEARCH } from "./constants";

export const productList = () => {
    // let data = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
    // data = await data.json()
    // console.log('hello abc', data)
    return {
        type : PRODUCT_LIST
    }
}

export const productSearch = (query) => {
    return {
        type : PRODUCT_SEARCH,
        query
    }
}

