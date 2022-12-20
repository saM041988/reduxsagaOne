import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants";

export const productItem = (data = [], action) => {
    switch (action.type) {
        // case PRODUCT_LIST:
        //     console.log('Product_List', action);
        //     return [action.data];
        case SET_PRODUCT_LIST:
            console.log('set_Product_List', action);
            return [...action.data];

        default:
            return data;
    }
}