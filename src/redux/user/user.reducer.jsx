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


const funcMap = new Map();
funcMap.set(UserActionTypes.SIGN_IN_SUCCESS, signInSuccess);
funcMap.set(UserActionTypes.SIGN_IN_FAILURE, signInFailure);

const userReducer = (state = INITIAL_STATE, action) => {
  return funcMap.has(action.type) ?
    funcMap.get(action.type)(state, action.payload) :
    state;
}

export default userReducer;