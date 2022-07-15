import { PRODUCT_LIST, SEARCH_PRODUCT } from "../constant";


export const productList = (limit) => {
    return{
        type : PRODUCT_LIST,
        limit
    }
}
// export const searchProduct = (query) => {
//     return{
//         type : SEARCH_PRODUCT,
//         query
//     }
// }