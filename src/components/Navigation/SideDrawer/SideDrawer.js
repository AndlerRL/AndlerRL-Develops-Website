import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Icon from '../../UI/Icons/Icons';
import NavigationItems from '../NavigationItems/NavigationItems';

import scss from './SideDrawer.scss';

const sideDrawer = props => {
  let attachedSCSS = [scss.SideDrawer, scss.Close];

  if (props.open) {
    attachedSCSS = [scss.SideDrawer, 'z-depth-5', scss.Open];
  }

  return (
    <React.Fragment>
      <Backdrop
        show={props.open}
        cancel={props.closed} />
      <div className={attachedSCSS.join(' ')}>
        <span className={scss.Back}
          onClick={props.back}>
          <Icon size="small">arrow_back</Icon>
        </span>
        <nav>
          <NavigationItems
            clicked={props.closed} />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;