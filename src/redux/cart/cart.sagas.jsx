import { takeLatest, put, all, call } from 'redux-saga/effects';

import { UserActionTypes } from '../user/user.actions';
import { clearCartAction } from './cart.actions';

function* clearCart() {
  yield put(clearCartAction());
}

function* onUserSignOutSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_SUCCESS,
    clearCart
  );
}

export default function* cartSagas() {
  yield all([
    call(onUserSignOutSuccess)
  ]);
}