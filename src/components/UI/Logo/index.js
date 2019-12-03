import React from 'react';

import andler_logo from 'assets/images/andler-devs-logo.png';

import scss from 'components/UI/scss/LogoImg.scss';

const logo = props => (
  <div
    className={[scss.Logo, props.class].join(' ')}
    onClick={props.clicked}
    data-aos={props.dataAos}>
    <img src={andler_logo} alt="Andler Develops Text Logo" height={props.height} width={props.width} />
  </div>
);

export default logo;