import React from 'react';

import { MainLeft, MainRight } from './Main/Main';
import Techs from './Main/Techs/Techs';
import imgHtml from '../../assets/images/icons/html5_logo.png';
import imgJs from '../../assets/images/icons/js_logo.png';
import imgCss from '../../assets/images/icons/css3_logo.png';

import scss from './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={scss.Bg}>

          <div className={'z-depth-1-half ' + scss.Logo}></div>
        </div>
        <div className={'z-depth-5 ' + scss.HomeHead}>
          <h1>Andler Develops</h1>

          <p className={scss.LeadIn}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis optio, non consectetur minima, sed culpa eligendi quos maxime ab cupiditate excepturi odio iste architecto enim? Facere in velit atque delectus! Illo fugiat suscipit aliquam, fuga vero earum et sunt cum eos ducimus minus distinctio omnis in incidunt, alias eligendi soluta, quis fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat suscipit aliquam, fuga vero earum et sunt cum eos ducimus minus distinctio omnis in incidunt, alias eligendi soluta, quis fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={'z-depth-5 ' + scss.HomeMain}>
          <h2>What I can bring into the table.</h2>
          <MainLeft img={imgJs}
            tech="javascript"
            firstText=" lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Facilis optio, non consectetur minima, sed 
            culpa eligendi quos maxime ab cupiditate excepturi odio iste 
            architecto enim? Facere in velit atque delectus! Illo fugiat 
            suscipit aliquam, fuga vero earum et sunt cum eos ducimus 
            minus distinctio omnis in incidunt, alias eligendi soluta, 
            quis fugit. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit."
            secText="Facere in velit atque delectus! Illo fugiat 
            suscipit aliquam, fuga vero earum et sunt cum eos ducimus 
            minus distinctio omnis in incidunt, alias eligendi soluta, 
            quis fugit. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit." />
          <MainRight img={imgCss} 
            tech="css3"
            firstText=" lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Facilis optio, non consectetur minima, sed 
            culpa eligendi quos maxime ab cupiditate excepturi odio iste 
            architecto enim? Facere in velit atque delectus! Illo fugiat 
            suscipit aliquam, fuga vero earum et sunt cum eos ducimus 
            minus distinctio omnis in incidunt, alias eligendi soluta, 
            quis fugit. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit."
            secText="Facere in velit atque delectus! Illo fugiat 
            suscipit aliquam, fuga vero earum et sunt cum eos ducimus 
            minus distinctio omnis in incidunt, alias eligendi soluta, 
            quis fugit. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit."/>
          <MainLeft img={imgHtml}
            tech="html5"
            firstText=" lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Facilis optio, non consectetur minima, sed 
            culpa eligendi quos maxime ab cupiditate excepturi odio iste 
            architecto enim? Facere in velit atque delectus! Illo fugiat 
            suscipit aliquam, fuga vero earum et sunt cum eos ducimus 
            minus distinctio omnis in incidunt, alias eligendi soluta, 
            quis fugit. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit."
            secText="Facere in velit atque delectus! Illo fugiat 
            suscipit aliquam, fuga vero earum et sunt cum eos ducimus 
            minus distinctio omnis in incidunt, alias eligendi soluta, 
            quis fugit. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit." />
          <Techs />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;