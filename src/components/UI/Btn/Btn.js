import React from 'react';

import scss from './Btn.scss';

const button = props => (
  <button
    className={"btn " + [scss.Btn, scss[props.type]].joint(' ')}
    onClick={props.clicked}>
    {props.children}
  </button>
)

export default button;