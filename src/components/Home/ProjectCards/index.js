import React, { useRef } from 'react';

import Carousel from 'components/UI/Carousel';
import Btn from 'components/UI/Btn';

import scss from 'components/scss/ProjectCards.scss';

const projectCards = props => {
  const projects = useRef();

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
          <Btn type="Primary" disabled={true}> Show More </Btn>
        </div>

        <div className={['z-depth-3', scss.Card].join(' ')} data-aos={props.dataAos}>
          <h3>Games</h3>
          <div className={scss.Carousel}>
            <Carousel>
              { props.carouselGame }
            </Carousel>
          </div>
          <Btn type="Primary" disabled={true}> Show More </Btn>
        </div>
      </div>
    </div>
  )
};

export default projectCards;