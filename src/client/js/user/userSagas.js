import { call, put, takeEvery, select } from 'redux-saga/effects';

import { GET_CURRENT_USER, REQUEST_LOGIN, receivedUser, setLoading } from './userActions';
import { getRoutes } from '../config/configSelectors';
import userService from './userService';

function* fetchUser() {
  yield put(setLoading(true));
  const routes = yield select(getRoutes);
  const user = yield call(userService.getCurrentUser, routes.currentUser);

  yield put(receivedUser(user));
  yield put(setLoading(false));
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
