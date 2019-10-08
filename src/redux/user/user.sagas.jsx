import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects';
import { UserActionTypes, signInSuccessAction, signInFailureAction, signOutFailureAction, signOutSuccessAction } from './user.actions';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

function* getUserSnapshot(userAth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAth);
    const snapShot = yield userRef.get();
    yield put(signInSuccessAction({ id: snapShot.id, ...snapShot.data }));
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGN_IN_START,
    signInWithGoogle
  )
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmail
  )
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      return;
    }
    yield getUserSnapshot(userAuth);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

function* onCheckUserSession() {
  yield takeLatest(
    UserActionTypes.CHECK_USER_SESSION,
    isUserAuthenticated
  );
}

function* signUserOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccessAction());
  } catch (error) {
    put(signOutFailureAction(error.message));
  }
}

function* onSignOutStart() {
  yield takeEvery(
    UserActionTypes.SIGN_OUT_START,
    signUserOut
  );
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart)
  ]);
}