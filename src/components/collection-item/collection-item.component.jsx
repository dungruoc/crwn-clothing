import React from 'react';
import { connect } from 'react-redux';


import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addCartItemAction } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addCartItem}) => {
  const {name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CustomButton customStyle="inverted" onClick={() => addCartItem(item)}>Add to cart</CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addCartItem: (item) => dispatch(addCartItemAction(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);