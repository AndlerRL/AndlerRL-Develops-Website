import React from 'react';

import scss from 'components/UI/scss/ImgMain.scss';

const imgMain = ({
  src,
  srcSet,
  alt,
  fallbackSrc,
  isLazy,
  onClick,
  style,
  height,
  width
}) => (
  <div
    className={scss.ImgMain}>
    <img 
      src={isLazy ? fallbackSrc : src}
      alt={alt}
      srcSet={isLazy ? '' : srcSet}
      data-srcset={srcSet}
      data-src={src}
      style={style}
      className={isLazy ? scss.LazyImg : ''}
      height={height}
      width={width} />
    { isLazy
      ? <span className={scss.LazyImg}>
        <div></div>
        <div></div>
        <div></div>
      </span> : null }
  </div>
);

export default imgMain;