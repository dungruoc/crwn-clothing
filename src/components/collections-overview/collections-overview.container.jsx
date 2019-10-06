import { connect } from 'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";

import CollectionsOverView from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching
})

const CollectionsOveriewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverView);

export default CollectionsOveriewContainer;