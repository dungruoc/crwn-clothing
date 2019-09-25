import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => (
  <h1>Hats</h1>
)

function App() {
  return (
    <div>
      <Route exact="true" path="/" component={HomePage} />
      <Route exact="true" path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
