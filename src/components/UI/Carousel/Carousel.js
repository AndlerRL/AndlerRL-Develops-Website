import React from 'react';

import scss from './Carousel.scss'

class carouselWeb extends React.Component {
  render () {
    return (
      <div className={["carousel center", scss.Carousel].join(' ')}>
        { this.props.children }
      </div>
    )
  }
};


export default (carouselWeb);