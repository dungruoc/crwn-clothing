export const UserActionTypes = {
  GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  CHECK_USER_SESSION: 'CHECK_USER_SESSION',
  SIGN_OUT_START: 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
}

export const googleSignInStartAction = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStartAction = ({ email, password }) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: { email, password }
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

export const signOutStartAction = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccessAction = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailureAction = (errorMessage) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage
});

export const signUpStartAction = (userDetails) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userDetails
});

export const signUpSuccessAction = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailureAction = (errorMessage) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: errorMessage
});

