import { combineReducers } from 'redux';
import commentsReducer from './comments';
import authenticationReducer from './authentication';
import usersReducer from './users'

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  comments: commentsReducer,
  users: usersReducer
});

export default rootReducer;
