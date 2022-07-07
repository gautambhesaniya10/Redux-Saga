import { PRODUCT_LIST } from "./constant";


export const productList = () => {
    let data = "hello"
    return{
        type : PRODUCT_LIST,
        payload : data
    }
}