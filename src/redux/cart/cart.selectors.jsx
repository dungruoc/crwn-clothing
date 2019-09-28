import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => Object.keys(cartItems).reduce((accumulated, id) => accumulated + cartItems[id].quantity, 0)
)

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartItems => (
    Object.keys(cartItems).reduce(
      (accumulated, id) => accumulated + cartItems[id].quantity * cartItems[id].price,
      0
    )
  )
)
