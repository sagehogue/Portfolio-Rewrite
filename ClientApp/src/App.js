import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './containers/Layout/Layout';
import NavMenu from './components/NavMenu/NavMenu'
import PageModal from './containers/PageModal/PageModal';

//  Save below for react-router testing
// import { Home } from './components/Home';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';

import './App.module.css';


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      /* <Route exact path='/' component={Home} />
      <Route path='/counter' component={Counter} />
      <Route path='/fetch-data' component={FetchData} /> */
      <div className="App">
        <Layout>
          <h1>"This is the base view.</h1>
          <h2>"Wow, is this alive?"</h2>
          <NavMenu />
          <PageModal></PageModal>
        </Layout>

      </div>
    );
  }
}
