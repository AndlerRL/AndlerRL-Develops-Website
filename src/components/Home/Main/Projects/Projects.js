import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import AOS from 'aos';
import M from 'materialize-css';

import { updateObject } from '../../../../shared/utility';
import Modal from '../../../UI/Modal/Modal';
import CarouselItem from '../../../UI/Carousel/CarouselItem/CarouselItem';
import Carousel from '../../../UI/Carousel/Carousel';
import Btn from '../../../UI/Btn/Btn';
import scss from './Projects.scss';

class projects extends React.Component {
  state = {
    zoomImgWeb: false,
    zoomImgGame: false
  }

  projects = React.createRef();

  componentDidMount () {
    AOS.init({
      duration: 750,
      offset: 250
    });

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

  componentDidUpdate () {
    AOS.refresh();
  }

  toggleZoomImgWeb = (e, image) => {
    const imgUpdate = updateObject(this.props.websiteImgs[image], {
      [image]: image
    })
    this.setState({
      zoomImgWeb: true
    })
    console.log(imgUpdate);
    return imgUpdate
  }

  toggleZoomImgGame = (e, image) => {
    const imgUpdate = updateObject(this.props.gameImgs[image], {
      [image]: image
    })
    this.setState({
      zoomImgWeb: true
    })
    console.log(imgUpdate);
    return imgUpdate
  }

  closeImgWeb = () => {
    this.setState({
      zoomImgWeb: false
    })
  }

  render () {
    const carouselWeb = this.props.websiteImgs.map((img, key) => {
      return (
        <CarouselItem
          img={img}
          key={key}
          zoom={e => this.toggleZoomImgWeb(e, img)} />
      )
    });
    const carouselGame = this.props.gameImgs.map((img, key) => {
      return (
        <CarouselItem
          img={img}
          key={key}
          zoom={e => this.toggleZoomImgGame(e, img)} />
      )
    });
    const modalWeb = (
      <Modal 
        modalClosed={this.closeImgWeb}
        show={this.state.zoomImgWeb}>
        <div className={'carousel carousel-slider z-depth-2'}>
          <span className={['carousel-item', scss.ZoomImg].join(' ')}>
          <img
            src={this.toggleZoomImgWeb}
            alt="zoomImgWeb" />
          </span>
        </div>
      </Modal>
    )
    const modalGame = (
      <Modal 
        modalClosed={this.toggleZoomImgGame}
        show={this.state.zoomImgGame}>
        <div className={'carousel carousel-slider z-depth-2'}>
          <span className={['carousel-item', scss.ZoomImg].join(' ')}>
            <img
              src={this.toggleZoomImgGame}
              alt="zoomImgGame" />
          </span>
        </div>
      </Modal>
    )

    return (
      <div className={scss.Projects} id="projects" ref={this.projects}>
        <div className={scss.BgOverlay}>
          { this.state.zoomImgWeb ? modalWeb : modalGame }
          <div className={['z-depth-3', scss.Card].join(' ')} data-aos="zoom-out-up">
            <h3>Websites && Designs</h3>
            <div className={scss.Carousel}>
              <Carousel>
                { carouselWeb }
              </Carousel>
            </div>
            <Btn type="Primary"> Show More </Btn>
          </div>
    
          <div className={['z-depth-3', scss.Card].join(' ')} data-aos="zoom-out-up">
            <h3>Games</h3>
            <div className={scss.Carousel}>
              <Carousel>
                { carouselGame }
              </Carousel>
            </div>
            <Btn type="Primary"> Show More </Btn>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    websiteImgs: state.projects.websiteImgs,
    gameImgs: state.projects.gameImgs
  }
}

export default withRouter(connect(mapStateToProps)(React.memo(projects)));