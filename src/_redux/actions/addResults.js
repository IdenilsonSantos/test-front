import { ADD_RESULTS } from './types';

export function loadResult(data) {
    return dispatch => {
        dispatch(setData(data))
    }
}

export function setData(data) {
    return {
        type: ADD_RESULTS,
        data: data
    }
};