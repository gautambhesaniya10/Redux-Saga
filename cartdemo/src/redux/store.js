import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import productSaga from "./productSaga";
// import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key : "persist-store",
    storage
}
const persistReducers = persistReducer(persistConfig , rootReducer)

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(productSaga);

export default store;

export const persistor = persistStore(store)