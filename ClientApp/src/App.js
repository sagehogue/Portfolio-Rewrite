import React, { Component } from 'react';
// import { Route } from 'react-router';
import Layout from './containers/Layout/Layout';
import NavMenu from './components/NavMenu/NavMenu';
import PageContainer from './containers/PageContainer/PageContainer';

//  Save below for react-router testing
// import { Home } from './components/Home';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';

import classes from './App.module.css';


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      // <Route exact path='/' component={Home} />
      // <Route path='/counter' component={Counter} />
      // <Route path='/fetch-data' component={FetchData} /> 
      <div className={classes.App}>
          <PageContainer></PageContainer>
      </div>
    );
  }
}
