import React from 'react';

import scss from './CarouselItem.scss';

const carouselItem = props => (
  <span className={["carousel-item", scss.CarouselItem].join(' ')} onClick={props.zoom}>
    <img src={props.img} alt="portfolio_item" />
  </span>
);

export default carouselItem;