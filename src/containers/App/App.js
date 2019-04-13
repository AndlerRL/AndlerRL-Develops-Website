import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Home from '../../components/Home/Home';
import Layout from '../Layout/Layout';

import './App.css';

class App extends Component {
  render() {
    const routes = ( 
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    )

    return (
      <Layout>
       { routes }
      </Layout>
    );
  }
}

export default App;
