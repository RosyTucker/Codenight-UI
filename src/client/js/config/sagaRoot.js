import { fork } from 'redux-saga/effects';
import userSagas from '../user/userSagas';

export default function* root() {
  yield [
    ...userSagas.map(saga => fork(saga))
  ];
}
