import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, PRODUCT_SEARCH } from './constants'

function* getProducts() {
    let data = yield fetch('http://localhost:3400/product');
    data = yield data.json();
    yield put({type:SET_PRODUCT_LIST, data})
}
function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3400/product?q=${data.query}`);
    result = yield result.json();
    yield put({type:SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(PRODUCT_SEARCH, searchProducts)
}

export default productSaga