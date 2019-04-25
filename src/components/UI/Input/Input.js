import React from 'react';

import Icon from '../Icons/Icons';
import IconFA from '../Icons/IconsFA';

import scss from './Input.scss';

const input = props => {
  let inputEle = null;
  let validationError = null;
  const invalid = [];

  if (props.invalid && props.shouldValidate && props.touched)
    invalid.push(scss.Invalid)

  if (props.invalid && props.touched)
    validationError = (
      <span 
        className={"helper-text " + scss.ErrorMsg}>
        <Icon size="tiny">report</Icon>
        Please, enter a valid {props.label}.
      </span>
    )

  if (props.invalid && props.touched && props.label === 'Confirm Password')
    validationError = (
      <span 
        className={"helper-text " + scss.ErrorMsg}>
        <Icon size="tiny">report</Icon>
        Please, re-enter and confirm your Password.
      </span>
  )

  switch (props.elementType) {
    case ('input'):
      inputEle = <input
        ref={props.inputRef}
        className={invalid}
        {...props.elementConfig}
        value={props.value}
        id={props.id}
        name={props.name}
        onChange={props.changed} />
        break;
    case ('email'):
      inputEle = <input
        ref={props.inputRef}
        className={invalid}
        {...props.elementConfig}
        value={props.value}
        id={props.id}
        name={props.name}
        onChange={props.changed} />
      break;
    case ('textarea'):
      inputEle = <textarea
        ref={props.inputRef}
        className={"materialize-textarea " + invalid}
        {...props.elementConfig}
        value={props.value}
        name={props.name}
        onChange={props.changed} />
        break;
    default:
      inputEle = <input
        className={invalid}
        ref={props.inputRef}
        {...props.elementConfig}
        value={props.value}
        id={props.id}
        name={props.name}
        onChange={props.changed} />
  }

  return (
    <div className={["input-field", scss.Input].join(' ')}>
      { inputEle }
      <label htmlFor={props.for}>{props.label}</label>
      { validationError }
    </div>
  )
}

export default input;