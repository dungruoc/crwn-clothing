import { UserActionTypes } from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
};

const signInSuccess = (state, payload) => {
  return {
    ...state,
    currentUser: payload,
    errorMessage: null
  }
}

const signInFailure = (state, payload) => {
  return {
    ...state,
    currentUser: null,
    errorMessage: payload
  }
}

const signOutSuccess = (state, payload) => {
  return {
    ...state,
    currentUser: null,
    errorMessage: null
  }
}

const signOutFailure = (state, payload) => {
  return {
    ...state,
    errorMessage: payload
  }
}

const signUpFailure = (state, payload) => {
  return {
    ...state,
    errorMessage: payload
  }
}

const funcMap = new Map();
funcMap.set(UserActionTypes.SIGN_IN_SUCCESS, signInSuccess);
funcMap.set(UserActionTypes.SIGN_IN_FAILURE, signInFailure);
funcMap.set(UserActionTypes.SIGN_OUT_SUCCESS, signOutSuccess);
funcMap.set(UserActionTypes.SIGN_OUT_FAILURE, signOutFailure);
funcMap.set(UserActionTypes.SIGN_UP_FAILURE, signUpFailure);

const userReducer = (state = INITIAL_STATE, action) => {
  return funcMap.has(action.type) ?
    funcMap.get(action.type)(state, action.payload) :
    state;
}

export default userReducer;