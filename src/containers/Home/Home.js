import React from 'react';
import AOS from 'aos';

import Projects from './Main/Projects/Projects';
import HomePage from '../../components/Home/Home';

class Home extends React.Component {
  componentDidMount () {
    AOS.init({
      duration: 750,
      offset: 300
    })
  }

  componentDidUpdate () {
    AOS.refresh()
  }

  render() {
    return (
      <React.Fragment>
        <HomePage
          dataAos="zoom-in-right" />
        <Projects />
      </React.Fragment>
    );
  }
}

export default Home;