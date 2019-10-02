import { ShopActionTypes } from "./shop.actions";

const INITIAL_STATE = {
  collections: null
}

const updateCollections = (state, payload) => {
  return {
    ...state,
    collections: payload
  }
}

const funcMap = new Map();
funcMap.set(ShopActionTypes.UPDATE_COLLECTIONS, updateCollections);


const shopReducer = (state = INITIAL_STATE, action) => {
  return funcMap.has(action.type) ?
    funcMap.get(action.type)(state, action.payload) :
    state;
}

export default shopReducer;