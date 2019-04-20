import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import AOS from 'aos';
import M from 'materialize-css';

import { updateObject } from '../../../../shared/utility';
import Modal from '../../../../components/UI/Modal/Modal';
import CarouselItem from '../../../../components/UI/Carousel/CarouselItem/CarouselItem';
import Carousel from '../../../../components/UI/Carousel/Carousel';
import Btn from '../../../../components/UI/Btn/Btn';
import scss from './Projects.scss';

class projects extends React.Component {
  state = {
    zoomImg: false,
    modalImg: ''
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

  toggleZoomImg = (e, image) => {
    const imgUpdate = updateObject(this.props.websiteImgs[image], {
      image: image
    })

    this.setState({
      zoomImg: true,
      modalImg: imgUpdate.image
    })
  }

  closeImg = () => {
    this.setState({
      zoomImg: false,
      modalImg: ''
    })
  }

  render () {
    const carouselWeb = this.props.websiteImgs.map((img, key) => {
      return (
        <CarouselItem
          img={img}
          key={key}
          zoom={e => this.toggleZoomImg(e, img)} />
      )
    });
    const carouselGame = this.props.gameImgs.map((img, key) => {
      return (
        <CarouselItem
          img={img}
          key={key}
          zoom={e => this.toggleZoomImg(e, img)} />
      )
    });
    const modal = (
      <Modal 
        modalClosed={this.closeImg}
        show={this.state.zoomImg}>
        <div className={'carousel carousel-slider z-depth-2'}>
          <span className={['carousel-item', scss.ZoomImg].join(' ')}>
          <img
            src={this.state.modalImg}
            alt="zoomImgWeb" />
          </span>
        </div>
      </Modal>
    )

    return (
      <div className={scss.Projects} id="projects" ref={this.projects}>
        <div className={scss.BgOverlay}>
          { modal }
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