export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export const setCurrentUserAction = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});