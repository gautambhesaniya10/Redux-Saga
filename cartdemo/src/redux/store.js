import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import { configureStore } from "@reduxjs/toolkit";

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

export default store;