import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Translate } from 'store';
import styled, { themeGet } from 'util/styles';
import { navigate } from 'gatsby';
import endPost from 'images/end-post.jpg'
import astronaut from 'images/astronaut.png'

const EndPosts = styled.div`
  background: linear-gradient(to bottom, rgb(15, 16, 18) 80%, transparent 100%);
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${themeGet('space.8')}px 0px;

  h1,
  h2 {
    position: absolute;
    top: 32px;
    font-weight: 300;
    letter-spacing: 2px;
    color: #f5f5f5;
    z-index: 100;
    text-align: center;

    &:last-child {
      top: 20rem;
    }
  }

  > div {
    background: url(${endPost}) no-repeat;
    background-position: center center;
    background-size: contain;
    width: 91.666%;
    margin: 0 auto;
    max-width: 880px;
    height: calc(75vh - 33.33%);
    max-height: 880px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      background: url(${astronaut}) no-repeat;
      background-position: center center;
      background-size: contain;
      width: 66%;
      margin: 0 auto;
      max-width: 405px;
      height: 66%;
      max-height: 405px;
      position: absolute;
      top: 24px;
    }
  }
`;

const NoContent = () => {
  const { t, lang, checkLang } = Translate.useContainer();

  useLayoutEffect(() => {
    if (lang)
      checkLang('404')
  }, [lang])

  const redirectHandler = () => {
    navigate(lang === 'es' ? '/es/' : '/')
  };

  return (
    <EndPosts>
      <div>
        <motion.h1 style={{ marginTop: '-8rem' }}>{t('0')}</motion.h1>
        <motion.div
          animate={{
            x: [null, 30, 15, -15, -30, -15],
            y: [null, 15, 30, -15, -15, -30],
            z: [null, 5, 0, -10, 5, 10],
            scale: [null, 1.04, 1.01, 1.05, 1.02, 1.03],
            transition: {
              duration: 4,
              times: [0, 0.5, 1],
              yoyo: Infinity
            }
          }}
        />
        <motion.h2
          style={{
            marginBottom: '-8rem',
            cursor: 'pointer'
          }}
          animate={{
            opacity: [null, 0.5, 1],
            scale: [null, 1.05, 1],
            transition: {
              duration: 2,
              loop: Infinity
            }
          }}
          onTap={redirectHandler}
        >
          {t('1')}
        </motion.h2>
      </div>
    </EndPosts>
  )
};

NoContent.propTypes = {
  is404: PropTypes.bool
};

NoContent.defaultProps = {
  is404: false
};

export default NoContent;
