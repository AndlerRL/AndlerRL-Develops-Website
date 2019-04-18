import React from 'react';
import AOS from 'aos';

import Modal from '../../../UI/Modal/Modal';
import Carousel from '../../../UI/Carousel/Carousel';
import Btn from '../../../UI/Btn/Btn';
import scss from './Projects.scss';

class projects extends React.Component {
  state = {
    zoomImg: null
  }

  componentDidMount () {
    AOS.init({
      duration: 750,
      offset: 250
    });
  }

  componentDidUpdate () {
    AOS.refresh();
  }

  zoomHandler = () => {
    this.setState({
      zoomImg: true
    })
  }

  zoomClosedHandler = () => {
    this.setState({
      zoomImg: false
    })
  }

  render () {
    return (
      <div className={scss.Projects}>
        <div className={scss.BgOverlay}>
          <Modal 
            modalClosed={this.zoomClosedHandler}
            show={this.state.zoomImg}>
            Something to show
          </Modal>
          <div className={['z-depth-3', scss.Card].join(' ')} data-aos="zoom-out-up">
            <h3>Websites && Designs</h3>
            <div className={scss.Carousel}>
              <Carousel zoom={this.zoomHandler} />
            </div>
            <Btn type="Primary"> Show More </Btn>
          </div>
    
          <div className={['z-depth-3', scss.Card].join(' ')} data-aos="zoom-out-up">
            <h3>Games</h3>
            <div className={scss.Carousel}>
              <Carousel zoom={this.zoomHandler} />
            </div>
            <Btn type="Primary"> Show More </Btn>
          </div>
        </div>
      </div>
    )
  }
};

export default projects;