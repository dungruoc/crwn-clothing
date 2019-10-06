import { ShopActionTypes } from "./shop.actions";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
}

const startFetchingCollections = (state, payload) => ({
  ...state,
  isFetching: true
});

const updateCollections = (state, payload) => ({
  ...state,
  isFetching: false,
  collections: payload
});

const failFetchingCollections = (state, payload) => ({
  ...state,
  isFetching: false,
  errorMessage: payload
})

const funcMap = new Map();
funcMap.set(ShopActionTypes.FETCH_COLLECTIONS_START, startFetchingCollections);
funcMap.set(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, updateCollections);
funcMap.set(ShopActionTypes.FETCH_COLLECTIONS_FAILURE, failFetchingCollections);


const shopReducer = (state = INITIAL_STATE, action) => {
  return funcMap.has(action.type) ?
    funcMap.get(action.type)(state, action.payload) :
    state;
}

export default shopReducer;