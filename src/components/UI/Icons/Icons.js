import React from 'react';

const icons = props => (
  <i className={props.size + " material-icons"} onClick={props.clicked}>
    {props.children}
  </i>
);

export default icons;