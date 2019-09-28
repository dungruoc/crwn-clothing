import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ match, collection }) => {
  return (
    <div className="collection-page">
      <h1 className="title">{collection.title.toUpperCase()}</h1>
      <div className="items">
        {collection.items
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.collectionId)(state)
})

export default connect(mapStateToProps, null)(CollectionPage);