import React from 'react';

import IconFA from '../../components/UI/Icons/IconsFA.js';
import Btn from '../../components/UI/Btn/Btn';

import scss from './Contact.scss';

const contact = props => {
  const contactRef = React.createRef();
  
  return (
    <div className={scss.Contact} id="contact-me" ref={contactRef}>
      <div className={['z-depth-2', scss.SendInfo].join(' ')} data-aos="fade-down">
        <h4>Like what you see?</h4>
        <h6>Send me your request so we can talk about bussiness</h6>

        <form
          action="mailto:info@andlerrl.co"
          method="POST"
          onSubmit={props.submit}>
          { props.children }
          <Btn
            type="Secondary"
            disabled={props.disabled}> Send Request </Btn>            
        </form>
      </div>

      <div className={scss.Info}>
        Contact Information

        <ul>
          <li>
            <a href="tel:+50662163355">
              <IconFA type="fas" icon="mobile"/> (+506) 6216 3355
            </a>
          </li>
          <li>
            <a href="mailto:info@andlerrl.co">
              <IconFA type="fas" icon="at"/> info@andlerrl.co
            </a>  
          </li>
          <li>
            <span>
              <IconFA type="fas" icon="location-arrow"/> San José, Costa Rica
              </span>
          </li>
        </ul>
      </div>
      <div className={scss.Links} align="right">
        Additional Web Links

        <ul>
          <li>
            <a href="https://github.com/Andlerrl" target="_blank" rel="noopener noreferrer">
              <IconFA type="fab" icon="github"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Andlerrl" target="_blank" rel="noopener noreferrer">
              <IconFA type="fab" icon="twitter"/>  
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/roberto-romero-lucas-147078138/" target="_blank" rel="noopener noreferrer">
              <IconFA type="fab" icon="linkedin"/>
            </a>
          </li>
        </ul>
      </div>
      <div className={scss.Copyright}>
        Website made with love by Andler Develops. © 2019 ® All rights reserved.
      </div>
    </div>
  )
};

export default contact;