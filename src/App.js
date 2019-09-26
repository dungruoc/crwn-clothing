import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Sign from './pages/sign/sign.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css';

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },
            () => { console.log(this.state); }
          );
        });
      } else {
        this.setState({ currentUser: authUser },
          () => { console.log(this.state); });
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
