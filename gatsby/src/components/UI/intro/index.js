import React, { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import braketLeft from 'images/intro/braket_left.svg'
import braketRight from 'images/intro/braket_right.svg'
import andlerM from 'images/intro_mob/a.svg'
import underscore from 'images/intro_mob/_.svg'
import devsM from 'images/intro_mob/devs.svg'
import andler from 'images/intro/andler.svg'
import devs from 'images/intro/devs.svg'
import logoDark from 'images/new_logo-dark.svg'
import styled, { themeGet } from 'util/styles'
import { Flex } from 'rebass'

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
    width: 352.5px;
    height: 72.75px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-left: 0;

    @media screen and (min-width: ${themeGet('breakpoints.0')}) {
      height: 298.33px;
      width: 590px;
    }
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

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    width: 106px;
    max-height: 298.33px;
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

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    width: 106px;
    max-height: 298.33px;
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
  height: 50%;
  max-height: 148px;
  width: 100%;
  max-width: 590px;
  position: absolute;
  top: 12px;
  left: calc(50% - 295px);
`
const Devs = styled(motion.div)`
  background: url(${devs}) center center no-repeat;
  background-size: contain;
  transform-origin: top;
  bottom: 12px;
  height: 50%;
  max-height: 148px;
  width: 100%;
  max-width: 590px;
  position: absolute;
  left: calc(50% - 295px);
`

const LogoController = styled.div`
  width: 352.5wpx;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    width: 590px;
  }
`

const IntroAnim = ({ animComplete, introEnd }) => {
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
      scale: 0.25
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: innerWidth <= 640 ? -160 : -397
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
      x: innerWidth <= 640 ? 160 : 387
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
      rotateY: '-90deg',
    },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    }
  }

  const _Anim = {
    hidden: {
      x: -24,
      opacity: 0,
      rotateY: '-90deg',
    },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    }
  }

  const devsMAnim = {
    hidden: {
      x: -24,
      opacity: 0,
      rotateY: '90deg',
    },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    }
  }

  /**
   * 
   * MOBILE ANIMATIONS ENDS
   * 
   */

  /**
   * ANIMATION CODE FOR LogoContainer
   * 
   * 
   * 
   * 
   * 
   */
  
  return innerWidth !== 0 && (
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
          scale: innerWidth <= 640 ? 0.393 : 0.135,
          top: 0,
          left: 0,
          y: innerWidth <= 640 ? '-0.5vw' : '-12.6vh',
          x: innerWidth <= 640 ? '-14.7vw' : '-19.15vh',
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
                duration: 1.5
              }}
            />
              <Flex
                alignItems="center"
                justifyContent="center"
                width={1}
                height="100%"
                style={{ position: 'relative', margin: '0 15px' }}
              >
                <AndlerM
                  initial="hidden"
                  animate="visible"
                  variants={aMAnim}
                  transition={{
                    delay: 1.75,
                    duration: 1.5,
                  }}
                />
                <Underscore
                  initial="hidden"
                  animate="visible"
                  variants={_Anim}
                  transition={{
                    delay: 1.75,
                    duration: 1.5,
                  }}
                />
                <DevsM
                  initial="hidden"
                  animate="visible"
                  variants={devsMAnim}
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
            <BraketR
              initial="hidden"
              animate="visible"
              variants={braketRAnim}
              transition={{
                duration: 1.5
              }}
            />
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
              style={{backgroundColor: '#f5f5f5'}}
              initial={{
                width: 0,
                height: 4,
                opacity: 0
              }}
              animate={{
                width: [0, innerWidth <= 640 ? 344.16 : 590, 0],
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
          </React.Fragment>
        )
      }
      </motion.div>
    </IntroAnimContainer>
  )
}

export default IntroAnim