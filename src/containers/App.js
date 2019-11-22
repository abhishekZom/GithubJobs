import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Landing from './Landing';
import Listings from './Listings';
import ListingsDetails from './ListingDetails';

import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={ Landing } />
          <Route exact path="/listings" component={ Listings } />
          <Route path="/listings/details" component={ ListingsDetails } />
        </Switch>
      </div>
    )
  }
}