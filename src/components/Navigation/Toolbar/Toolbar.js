import React from 'react';

import Icon from '../../UI/Icons/Icons';
import NavigationItems from '../NavigationItems/NavigationItems';

import scss from './Toolbar.scss';

const toolbar = props => (
  <header className={scss.Toolbar}>
    <div
      onClick={props.toggleMenu}
      className={scss.Menu}>
      <Icon size="small">menu</Icon>
    </div>
    <nav className={scss.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;