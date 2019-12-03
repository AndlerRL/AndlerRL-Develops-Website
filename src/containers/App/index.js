import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Home from 'containers/Home';
import Layout from 'containers/Layout';

import 'containers/scss/App.scss';

class App extends Component {
  state = {
    redirect: false,
    goHome: false,
  }

  redirectHandler = () => {
    setTimeout(() => {
      this.setState({
        redirect: true
      })
    }, 200);
  }

  returnHomeHandler = () => {
    if (this.props.match.path === "/" || window.screenTop > 0)
      window.scrollTo(0, 0);
    else 
      this.setState({
        goHome: true
      });
  }

  render() {
    let redirect = null;

    if (this.state.redirect || this.state.goHome)
      redirect = <Redirect to="/" />
      

    const routes = ( 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={() => 
          <div style={{
            width: '83.333%',
            margin: '0 auto',
            padding: '20rem 0',
            textAlign: 'center'
          }}>
            <div 
              style={{
                backgroundColor: '#f5f5f5',
                padding: '16.666%',
                clipPath: 'polygon(-700px 0px, 800px -100px, -200px 4000px, 200px 700px, 0px -200px)',
                boxShadow: '0 0 50px 12px #2223',
                border: '2px solid #22214'
              }}>
              <h1>404 Not Found</h1>
              <h4>You might entered by mistake or server issue.</h4>
              <h6
                onClick={this.redirectHandler}
                style={{
                  cursor: 'pointer',
                  color: '#00b0ff'
                }}>
                Click here to return
              </h6>
            </div>

            { redirect }
          </div>
        } />
      </Switch>
    )

    return (
      <Layout
        goHome={this.returnHomeHandler}>
       { routes }
      </Layout>
    );
  }
}

export default withRouter(App);
