import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        Object.keys(cartItems).map(id => (
          <CartItem key={id} item={cartItems[id]}/>
        ))
      }
    </div>
    <CustomButton >Go to Checkout</CustomButton>
  </div>
);

const mapCartItemsToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default connect(mapCartItemsToProps, null)(CartDropdown);