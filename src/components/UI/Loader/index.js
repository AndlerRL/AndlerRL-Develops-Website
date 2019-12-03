import React from 'react';

import scss from 'components/UI/scss/Loader.scss';

const loader = () => (
  <div className={scss.ldsRipple}>
    <div></div>
    <div></div>
  </div>
);

export default loader;