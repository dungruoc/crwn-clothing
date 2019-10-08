export const UserActionTypes = {
  GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  CHECK_USER_SESSION: 'CHECK_USER_SESSION'
}

export const googleSignInStartAction = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStartAction = ({ email, password }) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: { email: email, password: password }
});

export const signInSuccessAction = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailureAction = (errorMessage) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage
});

export const checkUserSessionAction = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});
