import React from 'react';

import Backdrop from 'components/UI/Backdrop';
import Icon from 'components/UI/Icons/Icons';
import NavigationItems from 'components/Navigation/NavigationItems';

import scss from 'components/scss/SideDrawer.scss';

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