import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Contact from '../../components/Contact/Contact';

import scss from './Layout.scss';

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  }
  
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    })
  }
  
  render () {
    return (
      <React.Fragment>
        <Toolbar 
          toggleMenu={this.sideDrawerToggleHandler} />
        <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerToggleHandler}
          back={this.sideDrawerToggleHandler} />

        <main className={scss.Main}>
          {this.props.children}
        </main>

        <footer>
          <Contact />
        </footer>
      </React.Fragment>
    )
  }
}

export default Layout;