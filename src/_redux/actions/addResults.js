import { ADD_RESULTS, ADD_USER } from './types';

export function loadResult(data) {
    return dispatch => {
        dispatch(setData(data))
    }
}

export function dataUser(user) {
    return dispatch => {
        dispatch(setUserData(user))
    }
}

export function setData(data) {
    return {
        type: ADD_RESULTS,
        data: data
    }
};

export function setUserData(user) {
    return {
        type: ADD_USER,
        user: user
    }
};