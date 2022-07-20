import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducer/rootReducer";
import rootSaga from "./userSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}

const store = createStore(rootReducer , applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)


export default store;