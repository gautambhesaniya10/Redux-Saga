import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import productSaga from "./productSaga";
// import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(productSaga);
export default store;