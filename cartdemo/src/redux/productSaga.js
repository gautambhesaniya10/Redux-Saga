import { takeEvery ,put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    let data = yield fetch('http://localhost:3004/product');
    data = yield data.json();
    yield put({type : SET_PRODUCT_LIST , data : data})
    
}
// function* getSearch(data) {
//     let res = yield fetch(`http://localhost:3004/product?q=${data.query}`);
//     res = yield res.json();
//     // console.warn("dataaaApiiii",data);
//     yield put({type : SET_PRODUCT_LIST , data : res})
    
// }

function* productSaga(params) {
    yield takeEvery(PRODUCT_LIST , getProducts)
    // yield takeEvery(SEARCH_PRODUCT , getSearch)
}

export default productSaga;