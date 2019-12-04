import React from 'react';

import scss from 'components/UI/scss/ImgTech.scss';

const imgTech = props => (
  <div
    className={[scss.ImgTech, scss.Tooltip].join(' ')}
    style={{width: props.width }}
    data-aos={props.dataAos}>
    <span className={['z-depth-3', scss.TooltipText, scss.TooltipTop].join(' ')}>{props.title}</span>
    <img src={props.img} alt={props.alt} height={props.height} />
  </div>
);

export default imgTech;