import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ShopActionTypes, fetchCollectionsSuccessAction, fetchCollectionsFailureAction } from './shop.actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot = yield collectionsRef.get();  
    const collections = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccessAction(collections));
  } catch (error) {
    yield put(fetchCollectionsFailureAction(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export default function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ]);
}