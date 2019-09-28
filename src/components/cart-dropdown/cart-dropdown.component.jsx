import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHiddenAction } from '../../redux/cart/cart.actions';

const CartDropdown = ({ toggleCartHidden, cartItems, itemNumber, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      {
        itemNumber ?
        Object.keys(cartItems).map(id => (
          <CartItem key={id} item={cartItems[id]} />
        ))
        :
        <span className="empty-message">Your cart is empty</span>
      }
      </div>
      {
        itemNumber ?
          <CustomButton
            onClick={() => toggleCartHidden(history)}
          >
            Go to Checkout
          </CustomButton>
        : null
      }
    </div>
  );
}

const mapCartItemsToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemNumber: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: (history) => {dispatch(toggleCartHiddenAction()); history.push('/checkout')}
})

export default withRouter(connect(mapCartItemsToProps, mapDispatchToProps)(CartDropdown));