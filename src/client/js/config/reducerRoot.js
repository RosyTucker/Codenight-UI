import { combineReducers } from 'redux';
import user from '../user/userReducers';

const reducers = combineReducers({
  ...user,
  config: state => state || {}
});

export default reducers;
