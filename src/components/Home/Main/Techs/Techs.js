import React from 'react';
import AOS from 'aos';

import imgFirebase from '../../../../assets/images/icons/firebase_logo.png';
import imgJest from '../../../../assets/images/icons/jest_logo.png';
import imgJquery from '../../../../assets/images/icons/jquery_logo.png';
import imgAjax from '../../../../assets/images/icons/jqueryAjax_logo.png';
import imgMongodb from '../../../../assets/images/icons/mongodb_logo.png';
import imgNode from '../../../../assets/images/icons/node_logo.png';
import imgPassport from '../../../../assets/images/icons/Passportjs_logo.png';
import imgReact from '../../../../assets/images/icons/Reactjs_logo.png';
import imgReactR from '../../../../assets/images/icons/ReactRouter_logo.png';
import imgRedux from '../../../../assets/images/icons/redux_logo.png';
import imgSass from '../../../../assets/images/icons/sass_logo.png';
import imgWebpack from '../../../../assets/images/icons/webpack_logo.png';
import imgAngular from '../../../../assets/images/icons/angular1_logo.png';
import imgMaterialUi from '../../../../assets/images/icons/materialui_logo.png';
import imgBootstrap from '../../../../assets/images/icons/bootstrap_logo.png';
import imgFoundation from '../../../../assets/images/icons/foundation_logo.png';
import imgAxios from '../../../../assets/images/icons/axios_logo.png';
import imgCreatejs from '../../../../assets/images/icons/createjs_logo.png'
import ImgTech from '../../../UI/ImgTech/ImgTech';

import scss from './Techs.scss';

class techs extends React.Component {
  state = {
    technologies: [{
      logo: imgReact,
      tech: 'React.js'
    },{
      logo: imgReactR,
      tech: 'React Router'
    },{
      logo: imgRedux,
      tech: 'Redux'
    },{
      logo: imgAngular,
      tech: 'Angular 1.x'
    },{
      logo: imgJquery,
      tech: 'jQuery'
    },{
      logo: imgMongodb,
      tech: 'MongoDB'
    },{
      logo: imgNode,
      tech: 'Node.js'
    },{
      logo: imgFirebase,
      tech: 'Firebase'
    },{
      logo: imgAxios,
      tech: 'AXIOS'
    },{
      logo: imgAjax,
      tech: 'jQuery Ajax'
    },{
      logo: imgPassport,
      tech: 'Passport.js'
    },{
      logo: imgWebpack,
      tech: 'Webpack'
    },{
      logo: imgJest,
      tech: 'Jest – Unit Test'
    },{
      logo: imgBootstrap,
      tech: 'Bootstrap 4'
    },{
      logo: imgFoundation,
      tech: 'Foundation Zurb'
    },{
      logo: imgMaterialUi,
      tech: 'Material UI'
    },{
      logo: imgSass,
      tech: 'Sass'
    },{
      logo: imgCreatejs,
      tech: 'Create.js'
    }]
  }

  componentDidMount () {
    AOS.init({
      duration: 1000,
      offset: 400
    })
  }

  componentDidUpdate () {
    AOS.refresh();
  }
  
  render () {
    let techs = [];
    for (let keys in this.state.technologies) {
      console.log(keys, this.state.technologies[keys])
      const logo = this.state.technologies[keys].logo;
      const tech = this.state.technologies[keys].tech;
      techs.push(
        <ImgTech 
          img={logo}
          title={tech}
          key={this.state.technologies[keys]}
          alt={tech}
          height="100%"
          width="10rem"
          dataAos="zoom-in-up" />
      )
    }

    return (
      <div className={scss.Techs}>
        <h3>Techs that I work with.</h3>
        { techs }
      </div>
    )
  }
};

export default techs;