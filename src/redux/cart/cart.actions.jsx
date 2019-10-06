export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  CLEAR_ITEM: 'CLEAR_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
}

export const toggleCartHiddenAction = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItemAction = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const clearCartItemIdAction = id => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: id
})

export const removeCartItemAction = id => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id
});