import React from 'react';
import AOS from 'aos';

import Projects from './Projects';
import HomePage from 'components/Home';
import SEO from 'components/SEO';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SEO pageView="/" />
        <HomePage />
        <Projects />
      </React.Fragment>
    );
  }
}

export default Home;