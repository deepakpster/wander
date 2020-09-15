import { all, fork } from 'redux-saga/effects';
import * as watcher from './calc';
import authSaga from './auth';
export default function* rootSaga() {
  yield all([
    watcher.addWatcher(), watcher.subWatcher(), watcher.changeWatcher(), watcher.initalizeWatcher(),
    fork(authSaga)
  ]);
}
