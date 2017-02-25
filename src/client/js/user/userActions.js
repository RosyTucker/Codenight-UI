export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const RECEIVED_USER = 'RECEIVED_USER';
export const FAILED_TO_RECEIVE_USER = 'FAILED_TO_RECEIVE_USER';

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

export function failedToReceiveUser() {
  return {
    type: FAILED_TO_RECEIVE_USER
  };
}

export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER
  };
}
