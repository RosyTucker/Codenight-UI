import { call, put, takeEvery, select } from 'redux-saga/effects';

import { GET_CURRENT_USER, REQUEST_LOGIN, receivedUser, failedToReceiveUser } from './userActions';
import { getRoutes } from '../config/configSelectors';
import userService from './userService';

function* fetchUser() {
  try {
    const routes = yield select(getRoutes);
    const user = yield call(userService.getCurrentUser, routes.currentUser);

    yield put(receivedUser(user));
  } catch (e) {
    yield put(failedToReceiveUser());
  }
}

function* login() {
  const routes = yield select(getRoutes);
  // eslint-disable-next-line no-undef
  window.location.href = routes.login;
}

function* watchGetCurrentUser() {
  yield takeEvery(GET_CURRENT_USER, fetchUser);
}

function* watchLoginRequest() {
  yield takeEvery(REQUEST_LOGIN, login);
}

export default [
  watchGetCurrentUser,
  watchLoginRequest
];
