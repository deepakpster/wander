import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import dashboardSaga from './dashboard';

export default function* rootSaga() {
  yield all([
    fork(authSaga), fork(dashboardSaga)
  ]);
}
