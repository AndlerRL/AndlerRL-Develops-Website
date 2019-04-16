import React from 'react';

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
import ImgTech from '../../../UI/ImgTech/ImgTech';

import scss from './Techs.scss';

const techs = props => (
  <div className={scss.Techs}>
    <h3>Techs that I work with.</h3>
    <ImgTech img={imgReact} alt="This_is_a_test" width="10rem" height="100%" title="React.js" />
    <ImgTech img={imgReactR} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgRedux} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgAngular} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgJquery} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgMongodb} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgNode} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgFirebase} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgAxios} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgAjax} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgPassport} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgWebpack} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgJest} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgBootstrap} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgFoundation} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgMaterialUi} alt="This_is_a_test" width="10rem" height="100%"/>
    <ImgTech img={imgSass} alt="This_is_a_test" width="10rem" height="100%"/>
  </div>
);

export default techs;