import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Projects from '../Home/Projects/Projects';
import Layout from '../Layout/Layout';

import './App.scss';

class App extends Component {
  render() {
    const routes = ( 
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="#contact-me" component={Contact} />
        <Route path="#projects" component={Projects} />
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

export default withRouter(App);
