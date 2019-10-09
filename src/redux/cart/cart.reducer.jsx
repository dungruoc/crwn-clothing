import { CartActionTypes } from './cart.actions';
import { addItemToCart, INITIAL_STATE, clearItemFromCart, decreaseItemNumber } from './cart.utils';

const toggleCartHidden = (state, payload) => ({
  ...state,
  hidden: !state.hidden
})

const addCartItem = (state, payload) => ({
  ...state,
  cartItems: addItemToCart(state.cartItems, payload)
})

const clearCartItem = (state, payload) =>({
  ...state,
  cartItems: clearItemFromCart(state.cartItems, payload)
})

const removeCartItem = (state, payload) => ({
  ...state,
  cartItems: decreaseItemNumber(state.cartItems, payload)
})

const clearAllItems = (state, payload) =>({
  ...state,
  cartItems: {}
})

const funcMap = new Map();
funcMap.set(CartActionTypes.TOGGLE_CART_HIDDEN, toggleCartHidden);
funcMap.set(CartActionTypes.ADD_ITEM, addCartItem);
funcMap.set(CartActionTypes.CLEAR_ITEM, clearCartItem);
funcMap.set(CartActionTypes.REMOVE_ITEM, removeCartItem);
funcMap.set(CartActionTypes.CLEAR_CART, clearAllItems);

const cartReducer = (state = INITIAL_STATE, action) => {
  return funcMap.has(action.type) ?
    funcMap.get(action.type)(state, action.payload) :
    state;
}

export default cartReducer;