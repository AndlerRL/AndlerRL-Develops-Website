import React from 'react';
import AOS from 'aos';

import Projects from './Projects';
import HomePage from 'components/Home';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomePage />
        <Projects />
      </React.Fragment>
    );
  }
}

export default Home;