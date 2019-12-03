import React from 'react';

import scss from 'components/UI/scss/Btn.scss';

const button = props => (
  <button
    className={"btn " + [scss.Btn, scss[props.type]].join(' ')}
    onClick={props.clicked}
    disabled={props.disabled}>
    {props.children}
  </button>
)

export default button;