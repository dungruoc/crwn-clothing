import React from 'react';
import { connect } from 'react-redux';


import { addCartItemAction } from '../../redux/cart/cart.actions';
import { CollectionItemContainer, ImageContainer, CollectionButtonContainer, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item, addCartItem}) => {
  const {name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl}/>
      <CollectionButtonContainer customStyle="inverted" onClick={() => addCartItem(item)}>Add to cart</CollectionButtonContainer>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  addCartItem: (item) => dispatch(addCartItemAction(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);