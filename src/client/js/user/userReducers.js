import { REQUEST_LOGIN, RECEIVED_USER, FAILED_TO_RECEIVE_USER } from './userActions';

const user = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state, isLoggingIn: true };
    case RECEIVED_USER:
      return { ...state, ...action.user, isLoggingIn: false };
    case FAILED_TO_RECEIVE_USER:
      return { isLoggingIn: false };
    default:
      return state;
  }
};

export default { user };
