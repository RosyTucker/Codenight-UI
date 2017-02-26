export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const RECEIVED_USER = 'RECEIVED_USER';
export const SET_LOADING = 'SET_LOADING';

export function requestLogin() {
  return {
    type: REQUEST_LOGIN
  };
}

export function receivedUser(user) {
  return {
    type: RECEIVED_USER,
    user
  };
}

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading
  };
}

export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER
  };
}
