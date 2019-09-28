import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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
    <div className="test-warning">
      * Credit cart for test: 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton value={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartItemsTotal
})

export default connect(mapStateToProps, null) (CheckoutPage);