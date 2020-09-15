import { action } from '../helpers/actionCreator';
import * as actions from '../constants/index';

export const authCheck = ()=> action(actions.AUTH_CHECK)
export const login = (username, password, history) => action(actions.LOGIN_REQUEST, {username, password, history})
export const loginSuccess = (user) => action(actions.LOGIN_SUCCESS, {user})
export const loginFailure = (error) => action(actions.LOGIN_FAILURE, {error})
export const logout = () => action(actions.LOGOUT_REQUEST)
export const logoutSuccess = () => action(actions.LOGOUT_SUCCESS)
export const logoutFailure = (error) => action(actions.LOGOUT_FAILURE, {error})

// export function signIn(email, password) {
//   return (dispatch, getState) => {
//     return firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
//       dispatch({ type: 'SIGN_IN_SUCCESS', user: res.user })
//       this.props.history.push('/')
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       dispatch({ type: 'SIGN_IN_FAILED', errorCode, errorMessage })
//     });
//   }
// }

// export function onAuthStateChanged() {
//   return (dispatch, getState) => {
//     return firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         dispatch({ type: 'AUTH_SUCCESS', user })
//       } else {
//         dispatch({ type: 'AUTH_FAILED' })
//         dispatch(push('/login'));
//       }
//     });
//   }
// }

// export function onSendPasswordResetEmail(emailAddress) {
//   return (dispatch, getState) => {
//     return firebase.auth().sendPasswordResetEmail(emailAddress).then((res) => {
//       // Email sent.
//       dispatch({ type: 'PASSWORD_RESET_EMAIL_SUCCESS' })
//     }).catch((err) => {
//       // An error happened.
//       // Handle Errors here.
//       const errorCode = err.code;
//       const errorMessage = err.message;
//       dispatch({ type: 'PASSWORD_RESET_EMAIL_FAILED', errorCode, errorMessage })
//     });
//   }
// }

// export function onSignUp(firstName, lastName, emailAddress, password) {
//   return (dispatch, getState) => {
//     return firebase.auth().createUserWithEmailAndPassword(emailAddress, password).then((registeredUser) => {
//       registeredUser.user.updateProfile({
//         displayName: `${firstName} ${lastName}`
//       });
//       registeredUser.user.sendEmailVerification().then(function () {
//         dispatch({ type: 'SIGN_UP_SUCCESS' })
//       }).catch(function (err) {
//         // An error happened.
//         const errorCode = err.code;
//         const errorMessage = err.message;
//         dispatch({ type: 'SIGN_UP_FAILED', errorCode, errorMessage })
//       });
//     }).catch((err) => {
//       const errorCode = err.code;
//       const errorMessage = err.message;
//       dispatch({ type: 'SIGN_UP_FAILED', errorCode, errorMessage })
//     });
//   }
// }