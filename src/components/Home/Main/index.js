import React from 'react';

import ImgMain from 'components/UI/ImgMain';

import scss from 'components/scss/Main.scss';

export const MainLeft = props => (
  <div className={scss.MainInfo}>
    <div className={scss.WithImg}>
      <p>
        <span className={scss.LeadIn}>
          {props.tech}
        </span>
        {props.firstText}
        <br/>
        {props.secText}
      </p>
      <ImgMain src={props.src} alt="Tech_Logo" height="260vh" />
    </div>
  </div>
);

export const MainRight = props => (
  <div className={scss.MainInfo}>
    <div className={scss.WithImg}>
      <ImgMain src={props.src} alt="Tech_Logo" height="260vh" />
      <p className={scss.Right}>
        <span className={scss.LeadIn}>
          {props.tech}
        </span>
        {props.firstText}
        <br/>
        {props.secText}
      </p>
    </div>
  </div>
);