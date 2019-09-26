import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Sign from './pages/sign/sign.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUserAction } from './redux/user/user.actions';

import './App.css';


class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(authUser);
      }
    });
  }

componentWillUnmount() {
  this.unsubcribeFromAuth();
}

render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={Sign} />
      </Switch>
    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUserAction(user))
});

export default connect(null, mapDispatchToProps)(App);
