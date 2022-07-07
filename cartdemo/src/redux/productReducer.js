import { PRODUCT_LIST } from "./constant";

var initialState = {
    data: []
}
export const productData = (state = initialState, action) => {
    // console.log("action",action);

    switch (action.type) {
        case PRODUCT_LIST:
            return {
                // ...state,
                data: [...state.data, action.payload]
            }

        default:
            return state;
    }
}
