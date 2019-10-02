import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollectionsAction } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubcribeFromSnapshot = null;

  componentDidMount() {
    console.log("ShopPage mounted");
    const collectionsRef = firestore.collection("collections");
    const { updateCollections } = this.props;

    this.unsubcribeFromSnapshot = collectionsRef.onSnapshot(async snapshot => {
      console.log(snapshot);
      const collections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collections);
      this.setState({ loading: false });
    })
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <Route exact path={`${match.path}`} render={(props) => (<CollectionsOverviewWithSpinner isLoading={loading} {...props}/>)} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollectionsAction(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);