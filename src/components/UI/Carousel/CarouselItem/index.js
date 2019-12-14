import React from 'react';

import scss from 'components/UI/scss/CarouselItem.scss';
import imgMain from 'components/UI/scss/ImgMain.scss';

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
      className={isLazy ? imgMain.LazyImg : null }
      alt={alt} />
    { isLazy
      ? <div className={imgMain.LazyImg}>
        <div></div>  
        <div></div>  
        <div></div>  
      </div> : null }
  </span>
);

export default carouselItem;