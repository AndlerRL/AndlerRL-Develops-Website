import React from 'react';

import Toolbar from 'components/Navigation/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer';
import Contact from 'containers/Contact';

import scss from 'containers/scss/Layout.scss';

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
          toggleMenu={this.sideDrawerToggleHandler}
          goHome={this.props.goHome} />
        <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerToggleHandler}
          back={this.sideDrawerToggleHandler} />

        <main className={['z-depth-1', scss.Main].join(' ')}>
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