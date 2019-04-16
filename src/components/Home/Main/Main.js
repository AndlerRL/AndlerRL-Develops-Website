import React from 'react';

import ImgMain from '../../UI/ImgMain/ImgMain';

import scss from './Main.scss';

export const MainLeft = props => (
  <div className={scss.MainInfo}>
    <div className={scss.WithImg}>
      <p><span className={scss.LeadIn}>{props.tech}</span>{props.firstText}</p>
      <ImgMain img={props.img} alt="Tech_Logo" height="260vh" />
    </div>
    <p>{props.secText}</p>
  </div>
);

export const MainRight = props => (
  <div className={scss.MainInfo}>
    <div className={scss.WithImg}>
      <ImgMain img={props.img} alt="Tech_Logo" height="260vh" />
      <p className={scss.Right}><span className={scss.LeadIn}>{props.tech}</span>{props.firstText}</p>
    </div>
    <p>{props.secText}</p>
  </div>
);