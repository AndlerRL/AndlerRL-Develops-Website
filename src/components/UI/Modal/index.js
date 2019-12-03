import React from 'react';

import Backdrop from '../Backdrop';
import IconFA from '../Icons/IconsFA';

import scss from 'components/UI/scss/Modal.scss';

const modal = props => (
  <React.Fragment>
    <Backdrop
      cancel={props.modalClosed}
      show={props.show} />
    <div 
      style={{
        transform: props.show ? 'translateX(0)' : 'translateX(-200vh)',
        opacity: props.show ? '1' : '0'
      }}
      className={"z-depth-5 " + scss.Modal}>
      <span onClick={props.modalClosed}>
        <IconFA 
          type="fas"
          icon="times"
          size="26px"
          margin="auto"
        />
      </span>
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;