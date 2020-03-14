import React, { useEffect } from 'react'
import { Flex, Text, Box } from 'rebass'
import styled, { themeGet } from 'util/styles'
import { Wrapper } from 'components/UI/wrappers'
import {
  YellowTriangleTop,
  PrimaryCard,
  SecondaryCard,
} from 'components/UI/cards'
import Img from 'gatsby-image'
import { Image } from 'components/image'
import { motion } from 'framer-motion'
import LinkComponent from 'components/link'
import Tooltip from 'components/UI/tooltip'
import { Icon } from 'components/UI/icons'
import { Btn } from 'components/UI/btn'

const ImgMainContainer = styled(Flex)`
  width: 100%;
  height: 66vh;
  border-bottom: 6px solid ${themeGet('colors.blackDepth.400')};
  z-index: 1;
  position: relative;
  top: 64px;
  background-attachment: fixed;

  h1.cover {
    margin-top: 64px;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: ${themeGet('letterSpacings.caps')};
    font-size: 10vw;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    text-align: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    user-select: none;
    background-image: url(${({ mainImg }) => mainImg});
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(127, 127, 127, 0.3);
    -webkit-text-fill-color: rgba(127, 127, 127, 0.3);

    @supports not (-webkit-background-clip: text) and (-webkit-text-fill-color: transparent) {
      background: ${themeGet('colors.blackDepth.500')};
      color: #f5f5f5;
    }
  }
`

const MainTechContainer = styled(motion.div)`
  width: ${({ stack }) => stack === 'JAMStack' || stack === 'MEAN Stack' || stack === 'MERN Stack' ? '200px' : '125px'};
  height: ${({ stack }) => stack === 'JAMStack' || stack === 'MEAN Stack' || stack === 'MERN Stack' ? '100px' : '125px'};
  position: absolute;
  bottom: 64px;
  left: 16px;
  z-index: 2;

  picture,
  img,
  source,
  div {
    width: 100%;
    height: 100%;
    opacity: 0.66;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    bottom: 32px;
  }
`

const ImgContentContainer = styled(Box)`
  width: 100%;
  z-index: 2;

  picture,
  img,
  source,
  div {
    width: 100%;
    height: 100%;
    box-shadow: 3px 4px 8px 1px #2222;
  }
`

const TechContainer = styled(motion.div)`
  width: ${({ stack }) => stack ? '300px' : '75px'};
  margin: 0.5rem;
  height: 75px;
  filter: grayscale(75%);
  opacity: 0.75;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    width: ${({ stack }) => stack ? '300px' : '100px'};
    height: 75px;
  }
`

const Project = ({ locale, p }) => {
  const body = p.projectBody[locale].map((b, i) => {
    if (b._type === 'block')
      return (
        <Text as="p" 
          my={4}
          lineHeight={2}
          width={1}
          key={i}
        >
          {b.children[0].text}
        </Text>
      )
    if (b._type === 'contentImage') {
      if (i <= 5)
        return (
          <ImgContentContainer 
            my={4}
            width={1}
            p={2}
            height={["250px", "300px", "300px", "350px"]}
            key={i}
          >
            <Image img={b.asset._ref} />
          </ImgContentContainer>
        )

      if (i >= 6)
        return (
          <ImgContentContainer 
            my={4}
            width={1 / 2}
            p={2}
            height={["125px", "150px", "225px", "225px"]}
            key={i}
          >
            <Image img={b.asset._ref} />
          </ImgContentContainer>
        )
    }
  })

  return (
    <React.Fragment>
      <ImgMainContainer 
        className="BackgroundClip"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mainImg={p.mainImage.asset.fluid.src}
      >
        <motion.h1 
          className="cover"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            ease: 'anticipate',
            duration: 1.5
          }}
        >
          {p.title[locale]}{' '}
        </motion.h1>
        <MainTechContainer 
          stack={p.mainTech.title}
          initial={{
            opacity: 0,
            scale: 0.1,
            rotate: 180 
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0
          }}
          transition={{
            delay: 1.5,
            duration: 0.75,
          }}
        >
          <Img fluid={p.mainTech.logo.asset.fluid} />
        </MainTechContainer>
      </ImgMainContainer>
      <Wrapper isMain
        mt="-275px"
      >
        <PrimaryCard
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          mt={7}
          contact
        >
          <YellowTriangleTop top={-115} project />
          { body }
        </PrimaryCard>
        <Box 
          height="6px" 
          backgroundColor="colors.blackDepth.400"
          style={{
            position: 'relative'
          }}
        >
          {
            p.projectUrl !== 'N/A' && (
              <Btn
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  top: -16,
                  right: 32,
                  width: 150
                }}
                size="large"
                variant="contained"
                project="true"
                backgroundcolor={["colors.blackDepth.200", "colors.blackDepth.400"]}
              >
                  <Text as="a"
                    href={p.projectUrl}
                    target="__blank"
                    textAlign="center"
                    letterSpacing={1}
                    width={1}
                  >
                    <Flex as="span"
                      alignItems="center"
                      justifyContent="space-around"
                      width={1}
                    >
                      { locale === 'es' ? '¡Ir en Vivo!' : 'Go to Live!' }
                      <Icon.externalLink size="14px" />
                    </Flex>
                  </Text>
              </Btn>
            )
          }
        </Box>
        <SecondaryCard
          contact
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          pb={4}
          px={4}
        >
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            width={1}
          >
            {
              p.techs.map((t, i) => (
                <Tooltip text={t.title} key={i}>
                  <TechContainer
                    whileHover={{
                      opacity: 1,
                      filter: 'grayscale(0%)'
                    }}
                  >
                    <Img fluid={t.logo.asset.fluid} />
                  </TechContainer>
                </Tooltip>
              ))
            }
          </Flex>
        </SecondaryCard>
        <Box 
          mb={7}
          py={3}
        >
          <LinkComponent
            to={locale === 'es' ? '/es/projects' : '/projects'}
          >
            <Flex
              alignItems="center"
              justifyContent="flex-start"
            >
              <Icon.arrowLeft size="16px" style={{ marginRight: 8 }} />
              { locale === 'es' ? 'Regresar a Proyectos' : 'Back to Projects' }
            </Flex>
          </LinkComponent>
        </Box>
      </Wrapper>
    </React.Fragment>
  )
}

export default Project