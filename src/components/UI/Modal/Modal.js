import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import scss from './Modal.scss';

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
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;