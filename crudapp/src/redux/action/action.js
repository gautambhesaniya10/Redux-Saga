import * as types from '../actionType';

export const loadUsersStart = () => {
    return {
        type : types.LOAD_USERS_START
    }
}
export const loadUsersSucess = (users) => {
    return {
        type : types.LOAD_USERS_SUCCESS,
        payload : users
    }
}
export const loadUsersError = (error)  => {
    return {
        type : types.LOAD_USERS_ERROR,
        payload : error
    }
}

export const ceateUserStart = (user) => {
    return {
        type : types.CREATE_USER_START,
        payload : user
    }
}
export const createUserSucess = () => {
    return {
        type : types.CREATE_USER_SUCCESS
    }
}
export const createUserError = (error)  => {
    return {
        type : types.CREATE_USER_ERROR,
        payload : error
    }
}

export const delteUserStart = (userId) => {
    return {
        type : types.DELETE_USER_START,
        payload : userId
    }
}
export const deleteUserSucess = (userId) => {
    return {
        type : types.DELETE_USER_SUCCESS,
        payload : userId
    }
}
export const deleteUserError = (error)  => {
    return {
        type : types.DELETE_USER_ERROR,
        payload : error
    }
}
export const editUserStart = (userInfo) => {
    return {
        type : types.UPDATE_USER_START,
        payload : userInfo
    }
}
export const editUserSucess = () => {
    return {
        type : types.UPDATE_USER_SUCCESS
    }
}
export const editUserError = (error)  => {
    return {
        type : types.UPDATE_USER_ERROR,
        payload : error
    }
}