import { CartActionTypes } from './cart.actions';
import { addItemToCart, INITIAL_STATE } from './cart.utils';

const toggleCartHidden = (state, payload) => ({
  ...state,
  hidden: !state.hidden
})

const addCartItem = (state, payload) => ({
  ...state,
  cartItems: addItemToCart(state.cartItems, payload)
})

const funcMap = new Map();
funcMap.set(CartActionTypes.TOGGLE_CART_HIDDEN, toggleCartHidden);
funcMap.set(CartActionTypes.ADD_ITEM, addCartItem);

const cartReducer = (state = INITIAL_STATE, action) => {
  return funcMap.has(action.type) ?
    funcMap.get(action.type)(state, action.payload) :
    state;
}

export default cartReducer;