import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import M from 'materialize-css';

import Img from 'components/UI/ImgMain';
import fallbackImage from 'assets/images/andler-devs-logo.png';
import useIO from 'hooks/IntersectionObserver';
import { updateObject } from 'shared/utility';
import Modal from 'components/UI/Modal';
import CarouselItem from 'components/UI/Carousel/CarouselItem';
import ProjectCards from 'components/Home/ProjectCards';

import scss from 'containers/scss/Projects.scss';

const projects = (props) => {
  const [zoomImg, setZoomImg] = useState(false)
  const [modalImg, setModalImg] = useState(fallbackImage)

  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 250
    });

    const elem = document.querySelectorAll('.carousel');
    M.Carousel.init(elem, {
      fullWidth: false,
      dist: -250,
      padding: 100,
      noWrap: true,
      indicators: true
    });

    return () => {
      AOS.refresh()
    }
  }, []);

  const [observer, setElements, entries] = useIO({
    threshold: [0, 0.25, 0.50, 1],
    root: null
  })

  useEffect(() => {
    if (props.websiteImgs.length || props.gameImgs) {
      let img = Array.from(document.getElementsByClassName('LazyImg'));
      setElements(img)
    }
  }, [props.websiteImgs, props.gameImgs, setElements])

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove('LazyImg');
        observer.unobserve(lazyImage);
      }
    })
  }, [entries, observer])

  const toggleZoomImg = (e, image) => {
    const imgUpdate = updateObject(props.websiteImgs[image], {
      image
    })

    setZoomImg(true)
    setModalImg(imgUpdate.image)
  }

  const closeImg = () => {
    setZoomImg(false)
    setModalImg(fallbackImage)
  }
  
  const carouselWeb = props.websiteImgs.map((img, key) => (
    <CarouselItem
      src={img}
      key={key}
      fallbackSrc={fallbackImage}
      isLazy
      alt="web_projects"
      zoom={e => toggleZoomImg(e, img)} />
  ));

  const carouselGame = props.gameImgs.map((img, key) => (
    <CarouselItem
      src={img}
      key={key}
      fallbackSrc={fallbackImage}
      isLazy
      alt="game_projects"
      zoom={e => toggleZoomImg(e, img)} />
  ));

  const modal = (
    <Modal 
      modalClosed={closeImg}
      show={zoomImg}>
      <div className={'carousel carousel-slider z-depth-2'}>
        <span className={['carousel-item', scss.ZoomImg].join(' ')}>
        <Img
          src={modalImg}
          fallbackSrc={fallbackImage}
          isLazy
          alt="zoomImgWeb"
          style={{borderRadius: 0}}
          height="100%" />
        </span>
      </div>
    </Modal>
  )

  return (
    <ProjectCards
      modal={modal}
      carouselGame={carouselGame}
      carouselWeb={carouselWeb}
      dataAos="zoom-out-up" />
  )
};

const mapStateToProps = state => {
  return {
    websiteImgs: state.projects.websiteImgs,
    gameImgs: state.projects.gameImgs
  }
}

export default withRouter(connect(mapStateToProps)(React.memo(projects)));