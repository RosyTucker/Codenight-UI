import { RECEIVE_USER, SET_LOADING } from './userActions';

export const getIsLoggedIn = state => !!state.user.id;
export const getIsLoading = state => state.user.isLoading;

const initialUser = {
  isLoading: true
};

const user = (state = initialUser, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, ...action.user };
    case SET_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    default:
      return state;
  }
};

export default { user };
