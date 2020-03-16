import React, { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import braketLeft from 'images/intro/braket_left.svg'
import braketRight from 'images/intro/braket_right.svg'
import andlerM from 'images/intro_mob/A.svg'
import underscore from 'images/intro_mob/_.svg'
import devsM from 'images/intro_mob/devs.svg'
import andler from 'images/intro/andler.svg'
import devs from 'images/intro/devs.svg'
import logoDark from 'images/new_logo-dark.svg'
import styled, { themeGet } from 'util/styles'
import { Flex } from 'rebass'

const IntroAnimContainer = styled(motion.div)`
  position: fixed;
  display: ${({ introEnd }) => introEnd.end ? 'none' : 'flex'};
  opacity: ${({ introEnd }) => introEnd.cOpc ? 1 : 0};
  z-index: 1700;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 100ms;
  background: ${themeGet('colors.blackDepth.400')} url(${logoDark}) no-repeat;
  background-size: 300px 300px;
  background-blend-mode: overlay;
  overflow: ${({ introEnd }) => !introEnd.end ? 'hidden' : 'auto'};
  background-position-x: 33.33%;
  background-position-y: center;

  .LogoContainer {
    width: 352.5px;
    height: 72.75px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 0;
    margin-left: calc(-50% + 232.65px);

    @media screen and (min-width: ${themeGet('breakpoints.2')}) {
      width: 440px;
      height: 298.33px;
    }

    @media screen and (min-width: ${themeGet('breakpoints.0')}) {
      width: 413px;
      height: 238.66px;
      margin-left: 0;
    }
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background-position-x: center;
  }
`

const BraketL = styled(motion.div)`
  background: url(${braketLeft}) center center no-repeat;
  background-size: contain;
  height: 100%;
  max-height: 72.75px;
  width: 27.75px;
  position: absolute;
  left: auto;

  @media screen and (min-width: ${themeGet('breakpoints.2')}) {
    width: 106px;
    max-height: 298.33px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    width: 74.2px;
    max-height: 208.83px;
  }
`
const BraketR = styled(motion.div)`
  background: url(${braketRight}) center center no-repeat;
  background-size: contain;
  height: 100%;
  max-height: 72.75px;
  width: 27.75px;
  position: absolute;
  right: auto;

  @media screen and (min-width: ${themeGet('breakpoints.2')}) {
    width: 106px;
    max-height: 298.33px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    width: 74.2px;
    max-height: 208.83px;
  }
`

const AndlerM = styled(motion.div)`
  background: url(${andlerM}) center center no-repeat;
  background-size: contain;
  transform-origin: left;
  height: 100%;
  max-height: 72.75px;
  width: 48px;
`

const Underscore = styled(motion.div)`
  background: url(${underscore}) center center no-repeat;
  background-size: contain;
  transform-origin: left;
  height: 100%;
  max-height: 72.75px;
  width: 42.75px;
`

const DevsM = styled(motion.div)`
  background: url(${devsM}) center center no-repeat;
  background-size: contain;
  transform-origin: left;
  height: 100%;
  max-height: 72.75px;
  width: 180.75px;
`

const Andler = styled(motion.div)`
  background: url(${andler}) center center no-repeat;
  background-size: contain;
  transform-origin: bottom;
  top: -44px;
  width: 413px;
  height: 100%;
  max-height: 104.41px;
  position: absolute;

  @media screen and (min-width: ${themeGet('breakpoints.2')}) {
    top: -8.4px;
    max-height: 148px;
    width: 440px;
    height: 50%;
  }
`
const Devs = styled(motion.div)`
  background: url(${devs}) center center no-repeat;
  background-size: contain;
  transform-origin: top;
  width: 413px;
  height: 100%;
  max-height: 104.41px;
  bottom: -44px;
  position: absolute;

  @media screen and (min-width: ${themeGet('breakpoints.2')}) {
    bottom: -8.4px;
    max-height: 148px;
    width: 440px;
    height: 50%;
  }
`

const LogoController = styled.div`
  width: 413px;

  @media screen and (min-width: ${themeGet('breakpoints.2')}) {
    width: 440px;
  }
`

const IntroAnim = React.memo(({ introEnd, animComplete }) => {
  const [innerWidth, setInnerWidth] = useState(0)

  const checkWidth = useCallback(
    () => {
      const { innerWidth } = window

      setInnerWidth(innerWidth)
    },
    [setInnerWidth]
  )

  useEffect(() => {
    const { innerWidth } = window

    setInnerWidth(innerWidth)
    window.addEventListener('resize', checkWidth)

    return () => {
      window.removeEventListener('resize', checkWidth)
    }
  }, [checkWidth])

  /**
   * 
   * DESKTOP/TABLET ANIMATIONS
   * 
   */

  const braketLAnim = {
    hidden: {
      opacity: 0,
      x: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: innerWidth <= 640 ? -160 : innerWidth <= 1024 ? -270.9 : -287.9
    }
  }
  
  const braketRAnim = {
    hidden: {
      opacity: 0,
      x: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: innerWidth <= 640 ? 160 : innerWidth <= 1024 ? 270.9 :  287.9
    }
  }
  
  const andlerAnim = {
    hidden: {
      y: 24,
      opacity: 0,
      rotateX: '-90deg',
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
    }
  }

  const devsAnim = {
    hidden: {
      y: -24,
      opacity: 0,
      rotateX: '90deg',
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
    }
  }

  /**
   * 
   * DESKTOP/TABLE ANIMATIONS ENDS
   * 
   */

  /**
   * 
   * MOBILE ANIMATIONS
   * 
   */
  
  const aMAnim = {
    hidden: {
      x: -24,
      opacity: 0,
    },
    visible: {
      x: 21,
      opacity: 1,
      rotateY: 0,
    }
  }

  const _Anim = {
    hidden: {
      y: 24,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
    }
  }

  const devsMAnim = {
    hidden: {
      x: 24,
      opacity: 0,
    },
    visible: {
      x: -17,
      opacity: 1,
      rotateY: 0,
    }
  }

  /**
   * 
   * MOBILE ANIMATIONS ENDS
   * 
   */



  return innerWidth !== 0 && (
    <IntroAnimContainer 
      introEnd={introEnd}
    >
      <motion.div className="LogoContainer"
        initial={{
          scale: innerWidth <= 640 || innerWidth >= 1024 ? 1 : 0.7,
          top: 'auto',
          left: 'auto',
          y: '0vh',
          x: '0vh',
          position: 'absolute'
        }}
        animate={{
          scale: innerWidth <= 640 ? 0.393 : 0.185,
          top: 0,
          left: 0,
          y: innerWidth <= 640 ? '-1.15vw' : '-9.25vh',
          x: innerWidth <= 640 ? '-21.5vw' : '-9.5vh',
          position: 'absolute',
          transition: {
            delay: 4.25,
            duration: 1.15,
            ease: 'backIn'
          }
        }}
        onAnimationComplete={animComplete}
      >
      {
        innerWidth <= 640
        ? (
          <React.Fragment>
            <BraketL
              initial="hidden"
              animate="visible"
              variants={braketLAnim}
              transition={{
                duration: 1.5,
                ease: 'backOut'
              }}
            />
            <AndlerM
              initial="hidden"
              animate="visible"
              variants={aMAnim}
              transition={{
                delay: 1,
                duration: 1,
              }}
            />
            <Underscore
              initial="hidden"
              animate="visible"
              variants={_Anim}
              transition={{
                delay: 1.5,
                duration: 1,
              }}
            />
            <DevsM
              initial="hidden"
              animate="visible"
              variants={devsMAnim}
              transition={{
                delay: 2.25,
                duration: 1.25,
              }}
            />
            <BraketR
              initial="hidden"
              animate="visible"
              variants={braketRAnim}
              transition={{
                duration: 1.5,
                ease: 'backOut'
              }}
            />
          </React.Fragment>
        )
        : (
          <React.Fragment>
            <BraketL
              initial="hidden"
              animate="visible"
              variants={braketLAnim}
              transition={{
                duration: 1.5
              }}
            />
            <Flex
              flexDireciton="column"
              alignItems="center"
              justifyContent="center"
              width={innerWidth <= 1024 ? "413px" : "440px"}
              height={innerWidth <= 1024 ? "104.41px" : "148px"}
              style={{ position: 'relative' }}
            >
              <Andler
                initial="hidden"
                animate="visible"
                variants={andlerAnim}
                transition={{
                  delay: 1.75,
                  duration: 1.5,
                }}
              />
              <LogoController />
              <motion.div
                style={{
                  backgroundColor: '#f5f5f5',
                  position: 'absolute'
                }}
                initial={{
                  width: 0,
                  height: 4,
                  opacity: 0,
                }}
                animate={{
                  width: [0, innerWidth <= 1024 ? 413 : 440, 0],
                  height: [28, 4, 0],
                  opacity: [1, 1, 0],
                  transition: {
                    duration: 1.5,
                    times: [0.24999, 0.9133, 1],
                    delay: 1,
                  }
                }}
              />
              <Devs
                initial="hidden"
                animate="visible"
                variants={devsAnim}
                transition={{
                  delay: 1.75,
                  duration: 1.5,
                }}
              />
            </Flex>
            <BraketR
              initial="hidden"
              animate="visible"
              variants={braketRAnim}
              transition={{
                duration: 1.5
              }}
            />
          </React.Fragment>
        )
      }
      </motion.div>
    </IntroAnimContainer>
  )
})

export default IntroAnim