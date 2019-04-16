import React from 'react';

const icons = props => (
  <i className={props.type + " fa-" + props.icon}>
    {props.children}
  </i>
);

export default icons;