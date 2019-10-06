import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = path => createSelector(
  [selectShopCollections],
  collections => collections ? collections[path] : null
);

export const selectCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectCollectionFetchError = createSelector(
  [selectShop],
  shop => shop.errorMessage
);

export const selectCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);