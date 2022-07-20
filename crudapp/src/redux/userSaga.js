import * as types from './actionType';
import { take , takeEvery , takeLatest , put ,all , delay , fork ,call } from 'redux-saga/effects';
import { loadUsersError , loadUsersSucess , createUserSucess , createUserError, deleteUserSucess, deleteUserError, editUserSucess, editUserError} from './action/action';
import { createUsersApi, delateUsersApi, editUsersApi, loadUsersApi } from './api';


function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUsersSucess(response.data))
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data))
    }
}
function* onCreateUserStartAsync({payload}) {
    try {
        const response = yield call(createUsersApi ,payload);
        if (response.status === 200) {
            yield put(createUserSucess(response.data))
        }
    } catch (error) {
        yield put(createUserError(error.response.data))
    }
}

function* onUpdateUserStartAsync({payload : { id , formValue}}) {
    try {
        const response = yield call(editUsersApi ,id , formValue);
        if (response.status === 200) {
            yield put(editUserSucess())
        }
    } catch (error) {
        yield put(editUserError(error.response.data))
    }
}

function* onDeleteUserStartAsync(userId) {
    try {
        const response = yield call(delateUsersApi ,userId);
        if (response.status === 200) {
            yield delay(500);
            yield put(deleteUserSucess(userId))
        }
    } catch (error) {
        yield put(deleteUserError(error.response.data))
    }
}

function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START , onLoadUsersStartAsync)
}
function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START , onCreateUserStartAsync)
}

function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START , onUpdateUserStartAsync)
}

function* onDeleteUser() {
  while (true) {
        const { payload : userId} = yield take(types.DELETE_USER_START);
        yield call(onDeleteUserStartAsync ,  userId)
  }
}

const userSaga = [
    fork(onLoadUsers) ,fork(onCreateUser) , fork(onDeleteUser) , fork(onUpdateUser)
]

export default function* rootSaga(){
    yield all([...userSaga])
}