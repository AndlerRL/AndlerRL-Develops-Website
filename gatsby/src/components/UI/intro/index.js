import React from 'react'
import { motion } from 'framer-motion'
import braketLeft from 'images/intro/braket_left.svg'
import braketRight from 'images/intro/braket_right.svg'
import andler from 'images/intro/andler.svg'
import devs from 'images/intro/devs.svg'
import logoDark from 'images/new_logo-dark.svg'
import styled, { themeGet } from 'util/styles'

const IntroAnimContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ introEnd }) => introEnd ? -1 : 1700};
  opacity: ${({ introEnd }) => introEnd ? 0 : 1};
  transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 100ms;
  background: ${themeGet('colors.blackDepth.400')} url(${logoDark}) center center no-repeat;
  background-size: 300px 300px;
  background-blend-mode: overlay;

  .LogoContainer {
    max-width: 83.333%;
    height: 298.33px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-left: 0;

    img {
      background-repeat: no-repeat;
    }

    img:nth-child(3) {
      transform-origin: bottom;
    }

    img:nth-child(5) {
      transform-origin: top;
    }
  }
`

const BraketL = styled(motion.img)`
  height: 100%;
  max-height: 298.33px;
  width: 100%;
  max-width: 106px;
  position: absolute;
  left: auto;
`
const BraketR = styled(motion.img)`
  height: 100%;
  max-height: 298.33px;
  width: 100%;
  max-width: 106px;
  position: absolute;
  right: auto;
`
const Andler = styled(motion.img)`
  height: 50%;
  max-height: 148px;
  width: 100%;
  max-width: 590px;
  position: absolute;
  top: 12px;
  left: calc(50% - 295px)
`
const Devs = styled(motion.img)`
  bottom: 12px;
  height: 50%;
  max-height: 148px;
  width: 100%;
  max-width: 590px;
  position: absolute;
  left: calc(50% - 295px)
`

const braketLAnim = {
  hidden: {
    opacity: 0,
    x: 0,
    scale: 0.25
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: -397
  }
}

const braketRAnim = {
  hidden: {
    opacity: 0,
    x: 0,
    scale: 0.25
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 387
  }
}

const andlerAnim = {
  hidden: {
    rotateX: '90deg',
  },
  visible: {
    rotateX: 0,
  }
}

const devsAnim = {
  hidden: {
    rotateX: '-90deg',
  },
  visible: {
    rotateX: 0,
  }
}

const IntroAnim = ({ animComplete, introEnd }) => (
  <IntroAnimContainer 
    introEnd={introEnd}
  >
    <motion.div className="LogoContainer"
      initial={{
        scale: 1,
        top: 'auto',
        left: 'auto',
        y: '0vh',
        x: '0vh',
        position: 'absolute'
      }}
      animate={{
        scale: 0.135,
        top: 0,
        left: 0,
        y: '-12.6vh',
        x: '-19.15vh',
        position: 'absolute',
        transition: {
          delay: 3.25,
          duration: 1.15,
          ease: 'backIn'
        }
      }}
      onAnimationComplete={animComplete}
    >
      <BraketL src={braketLeft} 
        initial="hidden"
        animate="visible"
        variants={braketLAnim}
        transition={{
          duration: 1
        }}
      />
      <BraketR src={braketRight} 
        initial="hidden"
        animate="visible"
        variants={braketRAnim}
        transition={{
          duration: 1
        }}
      />
      <Andler src={andler} 
        initial="hidden"
        animate="visible"
        variants={andlerAnim}
        transition={{
          delay: 0.83333,
          duration: 2,
        }}
      />
      <motion.div
        style={{backgroundColor: '#f5f5f5'}}
        initial={{
          width: 590,
          height: 0,
          opacity: 1
        }}
        animate={{
          width: 590,
          height: [24, 0],
          opacity: [1, 0],
          transition: {
            duration: 1,
            times: [0.83333, 1],
            delay: 0.75
          },
        }}
      />
      <Devs src={devs}
        initial="hidden"
        animate="visible"
        variants={devsAnim}
        transition={{
          delay: 0.83333,
          duration: 2,
        }}
      />
    </motion.div>
  </IntroAnimContainer>
)

export default IntroAnim