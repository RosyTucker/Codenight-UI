import { combineReducers } from 'redux';
import user from '../user/userReducers';

const reducers = combineReducers({
  ...user
});

export default reducers;
