import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { startFetchingCollections } from '../../redux/shop/shop.actions';
import CollectionsOveriewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    console.log("ShopPage mounted");
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionsOveriewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(startFetchingCollections())
})

export default connect(null, mapDispatchToProps)(ShopPage);