import { ADD_RESULTS } from '../actions/types';

const initialState = {
    data: [],
}

export default function resultsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RESULTS:
            return {
                ...state,
                data: action.data,
            }
        default:
            return state
    }
}