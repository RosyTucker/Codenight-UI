import { call, put, takeEvery, select } from 'redux-saga/effects';

import { GET_CURRENT_USER, receivedUser, failedToReceiveUser } from './userActions';
import userService from './UserService';

function* fetchUser() {
  try {
    const user = yield call(userService.getCurrentUser);
    yield put(receivedUser(user));
  } catch (e) {
    yield put(failedToReceiveUser());
  }
}

function* getCurrentUser() {
  const hasExistingUser = yield select(state => !!state.user.id);
  if (!hasExistingUser) {
    yield takeEvery(GET_CURRENT_USER, fetchUser);
  }
}

export default [
  getCurrentUser
];
