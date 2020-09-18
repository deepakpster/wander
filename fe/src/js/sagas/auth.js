import { all, call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import {forwardTo} from '../store.js';

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  signupSuccess,
  signupFailure,
  verifyEmail,
  updateProfile,
  updateProfileSuccess,
  updateProfileFailure
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

function* updateProfileSaga(user, firstName, lastName) {
  try {
    yield call(user.updateProfile({
    displayName: `${firstName} ${lastName}`
  }));
  yield put(updateProfileSuccess())
}
catch(error) {
  yield put(updateProfileFailure(error));
}
}

function* emailVerificationSaga(user, firstName, lastName) {
  try {
    yield call(rsf.auth.sendEmailVerification);
    yield put(signupSuccess(user))
  }
  catch(error) {
    yield put(signupFailure(error));
  }
}

function* signupSaga({type, payload}) {
  try {
    const registeredUser = yield call(rsf.auth.createUserWithEmailAndPassword, payload.email, payload.password)
    yield put(verifyEmail(registeredUser.user, payload.firstname, payload.lastname))
    yield call(forwardTo, '/signin')

    // successful login will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(signupFailure(error))
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
    takeEvery('SIGNUP_REQUEST', signupSaga),
    takeEvery('LOGOUT_REQUEST', logoutSaga),
    takeEvery('VERIFY_EMAIL_REQUEST',emailVerificationSaga),
    takeEvery('AUTH_CHECK', loginStatusWatcher),
    takeEvery('UPDATE_PROFILE', updateProfileSaga),
  ])
}

