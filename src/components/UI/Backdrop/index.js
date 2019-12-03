import React from 'react';

import scss from 'components/UI/scss/Backdrop.scss';

const backdrop = props => (
  props.show ?
    <div 
      onClick={props.cancel}
      className={scss.Backdrop}></div> :
    null
);

export default backdrop;