export const USER_SET_CURRENT_USER = 'SET_CURRENT_USER';


export const setCurrentUserAction = user => ({
  type: USER_SET_CURRENT_USER,
  payload: user
});