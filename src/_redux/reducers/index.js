import { combineReducers } from 'redux';

import results from './resultsReducer';
import users from './dataUser';

const rootReducer = combineReducers({
    data: results,
    user: users
});

export default rootReducer;