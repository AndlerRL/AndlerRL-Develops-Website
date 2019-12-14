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
import imgMain from 'components/UI/scss/ImgMain.scss';

const projects = (props) => {
  const [zoomSite, setZoomSite] = useState(false)
  const [modalSite, setModalSite] = useState(fallbackImage)

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
    if (props.websites.length || props.games) {
      let img = Array.from(document.getElementsByClassName(imgMain.LazyImg));
      setElements(img)
    }
  }, [props.websiteImgs, props.gameImgs, setElements])

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove(imgMain.LazyImg);
        observer.unobserve(lazyImage);
      }
    })
  }, [entries, observer])

  const toggleZoomImg = (e, site) => {
    const imgUpdate = updateObject(props.websites[site], {
      site
    })

    setZoomSite(true)
    setModalSite(imgUpdate.site)
  }

  const closeImg = () => {
    setZoomSite(false)
  }
  
  const carouselWeb = props.websites.map((w, key) => (
    <CarouselItem
      src={w.img}
      key={key}
      fallbackSrc={fallbackImage}
      isLazy
      alt="web_projects"
      zoom={e => toggleZoomImg(e, w)} />
  ));

  const carouselGame = props.games.map((g, key) => (
    <CarouselItem
      src={g}
      key={key}
      fallbackSrc={fallbackImage}
      isLazy
      alt="game_projects"
      zoom={e => toggleZoomImg(e, g)} />
  ));
  
  const siteCheck = modalSite.url &&
    modalSite.url.indexOf(/www.behance.net/g) === -1 ?
      'Website' : 'On Behance'

  const modal = (
    <Modal 
      modalClosed={closeImg}
      show={zoomSite}>
      <div className={scss.ZoomSiteItem}>
        <Img
          src={modalSite ? modalSite.img : fallbackImage}
          fallbackSrc={fallbackImage}
          isLazy
          alt="zoomImgWeb"
          style={{ borderRadius: 0 }} />
        { 
          modalSite ? (
            <React.Fragment>
              <div className={scss.ZoomSiteItemTitle}>
                <h4>{modalSite.title}</h4>
                <a href={modalSite.url} target="_blank" rel="noopener noreferrer">
                  {`${modalSite.title} – ${siteCheck}`}
                </a>
              </div>
              <div className={scss.ZoomSiteItemDescription}>
                {modalSite.description}
              </div>
              <div className={scss.ZoomSiteItemTechsContainer}>
                {
                  modalSite.techs && modalSite.techs.map((tech, i) => (
                    <div className={scss.TechsItem} key={i}>
                      {tech}
                    </div>
                  ))
                }
              </div>
            </React.Fragment>
          ) : null
        }
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
    websites: state.projects.websites,
    games: state.projects.games
  }
}

export default withRouter(connect(mapStateToProps)(React.memo(projects)));