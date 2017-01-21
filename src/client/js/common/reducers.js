import { combineReducers } from 'redux';
import { ActionTypes } from './Constants';

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.IS_FETCHING_CURRENT_USER:
      return Object.assign({}, state, { isFetchingUser: true });
    case ActionTypes.RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        user: action.user, isLoggedIn: true, isFetchingUser: false
      });
    case ActionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
};

const reducers = combineReducers({ currentUser });

export default reducers;
