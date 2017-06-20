import { combineReducers } from 'redux';
import commentsReducer from './comments';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  comments: commentsReducer
});

export default rootReducer;
