import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import scss from './NavigationItems.scss';

const navigationItems = props => (
  <ul className={scss.NavigationItems}>
    <NavigationItem
      exact link="/home"
      clicked={props.clicked}>
      Home
    </NavigationItem>
    <NavigationItem
      exact link="#projects"
      clicked={props.clicked}>
      Projects
    </NavigationItem>
    <NavigationItem
      exact link="#contact-me"
      clicked={props.clicked}
      id="contact-me">
      Contact
    </NavigationItem>
  </ul>
);

export default navigationItems;