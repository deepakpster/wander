import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects'
import {forwardTo} from '../store.js';

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from '../actions/authActions.js'

import {rsf} from '../store.js'


function* loginSaga({type, payload}) {
  try {
    const data = yield call(rsf.auth.signInWithEmailAndPassword, payload.username, payload.password)
    yield put(loginSuccess(data.user))
    yield call(forwardTo, '/')

    // successful login will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
  yield put(loginFailure(error))
  }
}

function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut)
    yield put(logoutSuccess())
    yield call(forwardTo, '/signin')
    // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(logoutFailure(error))
  }
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  if(rsf) {
      const channel = yield call(rsf.auth.channel)
    
      while (true) {
        const { user } = yield take(channel)
        if (user){ 
          yield put(loginSuccess(user))
          yield call(forwardTo, '/')
        } else {
          yield put(logoutSuccess())
          yield call(forwardTo, '/signin')
        }
      }
    }
}

export default function* loginRootSaga() {
  yield all([
    takeEvery('LOGIN_REQUEST', loginSaga),
    takeEvery('LOGOUT_REQUEST', logoutSaga),
    takeEvery('AUTH_CHECK', loginStatusWatcher),
  ])
}

