import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './checkout-item.styles.scss';
import { clearCartItemIdAction, addCartItemAction, removeCartItemAction } from '../../redux/cart/cart.actions';

const CheckoutItem = ({id, cartItems, clearItem, addItem, removeCartItem}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img  alt="item" src={cartItems[id].imageUrl}/>
    </div>
    <span className="name">{cartItems[id].name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeCartItem(id)}>&#10094;</div>
      <span className="value">{cartItems[id].quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItems[id])}>&#10095;</div>
    </span>    
    <span className="price">{cartItems[id].price}</span>
    <span className="remove-button" onClick={() => clearItem(id)}>&#10005;</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = (dispatch) => ({
  clearItem: id => dispatch(clearCartItemIdAction(id)),
  addItem: (item) => dispatch(addCartItemAction(item)),
  removeCartItem: (id) => dispatch(removeCartItemAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps) (CheckoutItem);