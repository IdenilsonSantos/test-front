import { ADD_USER } from '../actions/types';

const initialState = {
    user: [],
}

export default function dataUserReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}