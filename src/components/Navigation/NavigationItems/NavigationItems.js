import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import scss from './NavigationItems.scss';

const navigationItems = props => {
  const contactRef = React.createRef();
  const projectRef = React.createRef();
  const contact = document.querySelector('#contact-me');
  const project = document.querySelector('#projects');
  contactRef.current = contact
  projectRef.current = project
  
  const ref_cb_p = () => {
    projectRef.current.focus()
  }

  const ref_cb_c = () => {
    contactRef.current.focus();
  }

  return (
  <ul className={scss.NavigationItems}>
    <NavigationItem
      exact link="/home">
      Home
    </NavigationItem>
    <NavigationItem
      exact link="#projects"
      clicked={() => this.projectRef.current.ref_cb_p()} >
      Projects
    </NavigationItem>
    <NavigationItem
      exact link="#contact-me"
      clicked={() => this.contactRef.current.ref_cb_c()} >
      Contact
    </NavigationItem>
  </ul>
  )
};

export default navigationItems;