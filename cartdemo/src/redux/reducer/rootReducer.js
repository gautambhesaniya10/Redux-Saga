import { combineReducers } from "redux";
import { productData } from "./productReducer";
import {cartData} from './reducer';

const rootReducer = combineReducers({
    cartData : cartData ,
    productData : productData
})

export default rootReducer