const initialState = {
    user: null,
    errorCode: null,
    errorMessage: null,
    passwordResetEmailErrorCode: null,
    passwordResetEmailErrorMessage: null,
    passwordResetEmailMessage: null,
    signUpErrorCode: null,
    signUpErrorMessage: null,
    signUpMessage: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
        case 'SIGN_IN_SUCCESS':
            console.log('AUTH_SUCCESS', action)
            return {
                ...state,
                user: action.payload.user,
                errorCode: null,
                errorMessage: null
            }
        case 'AUTH_FAILED':
        case 'SIGN_IN_FAILED':
            return {
                ...state,
                user: null,
                errorCode: action.payload.errorCode,
                errorMessage: action.payload.errorMessage
            }
        case 'PASSWORD_RESET_EMAIL_SUCCESS':
            return {
                ...state,
                passwordResetEmailMessage: 'A email has been sent to reset your password. Please check.',
                passwordResetEmailErrorCode: null,
                passwordResetEmailErrorMessage: null
            }
        case 'PASSWORD_RESET_EMAIL_FAILED':
            return {
                ...state,
                passwordResetEmailMessage: null,
                passwordResetEmailErrorCode: action.errorCode,
                passwordResetEmailErrorMessage: action.errorMessage
            }
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                signUpErrorCode: null,
                signUpErrorMessage: null,
                signUpMessage: 'Your account has been created successfully. An email has been sent to verify your account. Please check you inbox.'
            }
        case 'SIGN_UP_FAILED':
            return {
                ...state,
                signUpErrorCode: action.errorCode,
                signUpErrorMessage: action.errorMessage,
                signUpMessage: null
            }
        default:
            return { ...state }
    }
}