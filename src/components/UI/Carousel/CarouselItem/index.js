import React from 'react';

import scss from 'components/UI/scss/CarouselItem.scss';

const carouselItem = ({
  src,
  srcSet,
  alt,
  fallbackSrc,
  isLazy,
  zoom,
  style
}) => (
  <span className={["carousel-item", scss.CarouselItem].join(' ')} onClick={zoom}>
    <img 
      src={isLazy ? fallbackSrc : src}
      srcSet={isLazy ? '' : srcSet}
      data-srcset={srcSet}
      data-src={src}
      style={style}
      className={isLazy ? 'LazyImg' : ''}
      alt={alt} />
  </span>
);

export default carouselItem;