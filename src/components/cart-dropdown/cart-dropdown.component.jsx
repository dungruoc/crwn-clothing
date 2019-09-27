import React from 'react';
import { connect } from 'react-redux';

import { mapCartItemsToProps } from '../../redux/cart/cart.utils';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(item => (
          <CartItem key={item.id} item={item}/>
        ))
      }
    </div>
    <CustomButton >Go to Checkout</CustomButton>
  </div>
);

export default connect(mapCartItemsToProps, null)(CartDropdown);