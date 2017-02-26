export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVED_USER';
export const SET_LOADING = 'SET_LOADING';

export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
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
