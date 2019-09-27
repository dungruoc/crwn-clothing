import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHiddenAction } from '../../redux/cart/cart.actions';
import { mapCartItemsToProps } from '../../redux/cart/cart.utils';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = ({toggleCartHidden, cartItems}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItems.length}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
})

export default connect(mapCartItemsToProps, mapDispatchToProps)(CartIcon);