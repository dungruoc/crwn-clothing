import { CartActionTypes } from './cart.actions';

const INITIAL_STATE = {
  hidden: true
};

const toggleCartHidden = (state) => ({
  ...state,
  hidden: !state.hidden
})

const funcMap = new Map();
funcMap.set(CartActionTypes.TOGGLE_CART_HIDDEN, toggleCartHidden);

const cartReducer = (state = INITIAL_STATE, action) => {
  return funcMap.has(action.type) ?
    funcMap.get(action.type)(state) :
    state;
}

export default cartReducer;