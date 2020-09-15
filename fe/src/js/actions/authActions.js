import { action } from '../helpers/actionCreator';
import * as actions from '../constants/index';

export const authCheck = ()=> action(actions.AUTH_CHECK)
export const login = (username, password) => action(actions.LOGIN_REQUEST, {username, password})
export const loginSuccess = (user) => action(actions.LOGIN_SUCCESS, {user})
export const loginFailure = (error) => action(actions.LOGIN_FAILURE, {error})
export const logout = () => action(actions.LOGOUT_REQUEST)
export const logoutSuccess = () => action(actions.LOGOUT_SUCCESS)
export const logoutFailure = (error) => action(actions.LOGOUT_FAILURE, {error})

export const verifyEmail = (user, firstname, lastname) => action(actions.VERIFY_EMAIL_REQUEST, {user, firstname, lastname})
export const signup = (firstname, lastname, email, password) => action(actions.SIGNUP_REQUEST, {firstname, lastname, email, password})
export const signupSuccess = (user) => action(actions.SIGNUP_SUCCESS, {user})
export const signupFailure = (error) => action(actions.SIGNUP_FAILURE, {error})

export const updateProfile = (user, firstName, lastName) => action(actions.UPDATE_PROFILE, {user, firstName, lastName})
export const updateProfileSuccess = () => action(actions.UPDATE_PROFILE_SUCCESS, {user, firstName, lastName})
export const updateProfileFailure = (error) => action(actions.UPDATE_PROFILE_FAILURE, {error})
