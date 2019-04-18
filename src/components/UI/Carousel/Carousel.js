import React from 'react';
import M from 'materialize-css';

import testImg from '../../../assets/images/bricks.jpg'
import CarouselItem from './CarouselItem/CarouselItem';
import scss from './Carousel.scss'

class carousel extends React.Component {
  state = {
    projectsImgs: [
      testImg,
      testImg,
      testImg,
      testImg,
      testImg,
      testImg,
    ]
  }
  componentDidMount () {
    const elem = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elem, {
      fullWidth: false,
      dist: -250,
      padding: 100,
      noWrap: true,
      indicators: true
    });
    return instances
  }

  render () {
    let carouselItem = this.state.projectsImgs.map((img, key) => {
      return <CarouselItem
        img={img}
        key={key}
        zoom={this.props.zoom} />
    })
    return (
      <div className={["carousel center", scss.Carousel].join(' ')}>
        { carouselItem }
      </div>
    )
  }
};

export default carousel;