import React from 'react';

import scss from './ImgMain.scss';

const imgMain = props => (
  <div
    className={scss.ImgMain}>
    <img src={props.img} alt={props.alt} height={props.height} width={props.width} />
  </div>
);

export default imgMain;