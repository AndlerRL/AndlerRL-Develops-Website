import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import scss from './Layout.scss';

const layout = props => (
  <React.Fragment>
    <Toolbar />
    <main className={scss.Main}>
      {props.children}
    </main>

    <footer className={scss.Copyright}>
      Here comes the footer
    </footer>
  </React.Fragment>
)

export default layout;