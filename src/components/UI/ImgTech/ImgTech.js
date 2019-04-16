import React from 'react';

import scss from './ImgTech.scss';

const imgTech = props => (
  <div
    className={scss.ImgTech}
    style={{width: props.width }}>
    <img src={props.img} alt={props.alt} height={props.height} title={props.title} />
  </div>
);

export default imgTech;