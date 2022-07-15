import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constant";

var initialState = {
    data: []
}
export const productData = (state = initialState, action) => {
    // console.log("action",action);

    switch (action.type) {
            case SET_PRODUCT_LIST : 
            return{
                data: [...action.data]
            }

        default:
            return state;
    }
}
