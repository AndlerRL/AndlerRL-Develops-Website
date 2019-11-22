import React from 'react';

import Icon from '../../UI/Icons/Icons';
import NavigationItems from '../NavigationItems/NavigationItems';

import scss from './Toolbar.scss';

const toolbar = props => {
  return (
  <header className={'z-depth-2 ' + scss.Toolbar}>
    <div
      className={scss.Menu}>
      <div className={scss.Andler} onClick={props.goHome}>
        <h3>andler devs</h3>
      </div>
      <Icon 
        size="small"
        clicked={props.toggleMenu}>menu</Icon>
    </div>
    <nav className={scss.DesktopOnly}>
      <div className={scss.Andler} onClick={props.goHome}>
        <h3>andler devs</h3>
      </div>
      <NavigationItems />
    </nav>
  </header>
  )
};

export default toolbar;