import React from 'react';
import { NavLink } from 'react-router-dom';

import scss from './NavigationItem.scss';

const navigationItem = props => (
  <li className={scss.NavigationItem}>
    <NavLink
      exact={props.exact}
      to={props.link}
      activeClassName={scss.Active}
      onClick={props.clicked}
      id={props.id}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;