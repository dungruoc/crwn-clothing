import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const ShopActionTypes = {
  FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE'
}

export const startFetchingCollections = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccessAction = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailureAction = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsAsyncAction = () => {
  return dispatch => {
    const collectionsRef = firestore.collection("collections");
    dispatch(startFetchingCollections());

    collectionsRef.get().then(snapshot => {
      console.log(snapshot);
      const collections = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccessAction(collections));
    })
    .catch(error => {
      dispatch(fetchCollectionsFailureAction(error.message));
    });
  }
};