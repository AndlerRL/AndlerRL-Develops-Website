import React from 'react';

import Carousel from '../../UI/Carousel/Carousel';
import Btn from '../../UI/Btn/Btn';

import scss from './ProjectCards.scss';

const projectCards = props => {
  const projects = React.createRef();

  return (
    <div className={scss.Projects} id="projects" ref={projects}>
      <div className={scss.BgOverlay}>
        { props.modal }
        <div className={['z-depth-3', scss.Card].join(' ')} data-aos={props.dataAos}>
          <h3>Websites && Designs</h3>
          <div className={scss.Carousel}>
            <Carousel>
              { props.carouselWeb }
            </Carousel>
          </div>
          <Btn type="Primary"> Show More </Btn>
        </div>

        <div className={['z-depth-3', scss.Card].join(' ')} data-aos={props.dataAos}>
          <h3>Games</h3>
          <div className={scss.Carousel}>
            <Carousel>
              { props.carouselGame }
            </Carousel>
          </div>
          <Btn type="Primary"> Show More </Btn>
        </div>
      </div>
    </div>
  )
};

export default projectCards;