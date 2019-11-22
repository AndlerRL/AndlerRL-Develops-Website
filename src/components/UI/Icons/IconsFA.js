import React from 'react';

const icons = props => (
  <i className={props.type + " fa-" + props.icon}
    style={{
      margin: props.margin,
      fontSize: props.size
    }}>
    {props.children}
  </i>
);

export default icons;