import {combineReducers} from 'redux'
import { cartItem } from './reducer'
import { productItem } from './productReducer'

export default combineReducers({
    cartItem, productItem
})