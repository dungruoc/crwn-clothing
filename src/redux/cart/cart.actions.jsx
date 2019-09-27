export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM'
}

export const toggleCartHiddenAction = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItemAction = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})