export const ShopActionTypes = {
  UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS'
}

export const updateCollectionsAction = collections => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections
});