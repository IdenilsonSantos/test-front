import { combineReducers } from 'redux';

import results from './resultsReducer';

const rootReducer = combineReducers({
    data: results
});

export default rootReducer;