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
  
  const refCallbackP = () => {
    projectRef.current.focus()
  }

  const refCallbackC = () => {
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
      clicked={() => this.projectRef.current.refCallbackP()} >
      Projects
    </NavigationItem>
    <NavigationItem
      exact link="#contact-me"
      clicked={() => this.contactRef.current.refCallbackC()} >
      Contact
    </NavigationItem>
  </ul>
  )
};

export default navigationItems;