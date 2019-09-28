import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutHeader = () => (
  <div className="checkout-header">
    {
      ["Product", "Description", "Quantity", "Price", "Remove"].map(
        (title, idx) => (
          <div className="header-block" key={idx}>
            <span>{title}</span>
          </div>
        )
      )
    }
  </div>
);

const CheckoutPage = ({cartItems, cartTotal}) => (
  <div className="checkout-page">
    <CheckoutHeader />
    {
      Object.keys(cartItems).map(id => (
        <CheckoutItem key={id} id={id} /> 
      ))
    }
    <div className="total">
      <span>TOTAL: ${cartTotal}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartItemsTotal
})

export default connect(mapStateToProps, null) (CheckoutPage);