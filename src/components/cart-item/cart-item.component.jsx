import React from 'react';

import { CartItemContainer, ItemDetailsContainer, NameContainer, PriceContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{quantity} x ${price} </PriceContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;