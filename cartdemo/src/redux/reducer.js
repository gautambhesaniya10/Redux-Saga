import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

var initialState = {
    data: []
}
export const cartData = (state = initialState, action) => {
    // console.log("action",action);

    switch (action.type) {
        case ADD_TO_CART:
            return {
                data: [...state.data, action.payload]
            }
        case REMOVE_FROM_CART:
            if (state.data.length > 0) {
                // state.data.length =  state.data.length - 1
                let result = state.data.filter(item => item.id !== action.payload)
                return {
                    data: [...result]
                }
            }
            return state;
        case EMPTY_CART:
            if (state.data.length > 0) {
                state.data = []
                return {
                    data: [...state.data]
                }
            }
            return state;
        default:
            return state;
    }
}
