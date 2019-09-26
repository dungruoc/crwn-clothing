import { USER_SET_CURRENT_USER } from './user.actions';

const INITIAL_STATE = {
  currentUser: null
};

const setCurrentUser = (state, payload) => {
  return {
    ...state,
    currentUser: payload
  }
}

const funcMap = new Map();
funcMap.set(USER_SET_CURRENT_USER, setCurrentUser);

const userReducer = (state = INITIAL_STATE, action) => {
  return funcMap.has(action.type) ?
    funcMap.get(action.type)(state, action.payload)
    :
    state;
}

export default userReducer;