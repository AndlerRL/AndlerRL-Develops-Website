import React, { useEffect } from 'react'
import { Text, Flex, Box } from "rebass"
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

import loadable from '@loadable/component'
import { Wrapper } from "components/UI/wrappers"
import logo from 'images/new_logo.svg'
import stationBck from 'images/projects_bg.jpg'
import styled, { themeGet } from 'util/styles'
import { 
  PrimaryCard,
  YellowTriangleTop,
  YellowTriangleBottom,
} from 'components/UI/cards'
import { Translate } from 'store'
import Scrollspy from 'components/UI/scrollspy'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const HomeHero = loadable(() => import("components/UI/codeBackground"))
const Tech = loadable(() => import("./techs"))
const WhoAmI = loadable(() => import("./whoAmI"))
const WhatIDo = loadable(() => import("./whatIdo"))

const Logo = styled.div`
  background: url(${logo}) center center no-repeat;
  width: 300px;
  height: 270px;
  background-size: contain;
  top: -200px;
  position: absolute;
  z-index: 3;

  div,
  img,
  picture,
  iframe {
    width: 100%;
    height: 100%;
  }
`

const DescriptionContainer = styled(Flex)`
  width: 100%;
  padding: 0px;
  background: url(${stationBck}) center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  
  > div:first-of-type {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to top,
      ${themeGet('colors.blackDepth.300')} 8.333%,
      ${themeGet('colors.blackDepth.500')}e6 33.333%,
      ${themeGet('colors.blackDepth.500')}e6 91.666%,
      ${themeGet('colors.blackDepth.500')} 100%
    );

    @media screen and (min-width: ${themeGet('breakpoints.0')}) {
      background: linear-gradient(
        to top,
        ${themeGet('colors.blackDepth.300')} 8.333%,
        ${themeGet('colors.blackDepth.500')}bf 33.333%,
        ${themeGet('colors.blackDepth.500')}bf 91.666%,
        ${themeGet('colors.blackDepth.500')} 100%
      );
      padding: ${themeGet('space.5')}px;
    }
  }
`

const variants = {
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 6.15 + (custom * 0.75)
    }
  }),
  initial: {
    opacity: 0,
    x: 50
  }
}

const Home = ({ locale }) => {
  const { checkLang, t, lang } = Translate.useContainer()

  useEffect(() => {
    if (lang)
      checkLang('index')

    AOS.init({
      once: true
    })

    return () => {
      AOS.refresh()
    }
  }, [lang])

  const menuItems = {
    id: ['first_s', 'second_s', 'third_s', 'techs'],
    title: [t('menu.first'), t('menu.second'), t('menu.third'), t('menu.tech')]
  }

  return (
    <React.Fragment>
      <HomeHero />
      <Wrapper isMain mb={5}>
        <PrimaryCard
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={["-116px", "-150px", "-150px"]}
          mb={7}
        >
          <YellowTriangleTop top={-116} />
          <Logo />
          <Text as="h2"
            mt={5}
            letterSpacing={3}
            textAlign="center"
          >
            {t('title.greet.0')}
          </Text>
          <Text as="h2"
            mt={2}
            letterSpacing={3}
            textAlign="center"
          >
            {t('title.greet.1')}
          </Text>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            width={1}
            my={4}
          >
            <Text as="p"
              lineHeight={2}
            >
              {t('title.content.0')}
            </Text>
            <Text as="p"
              lineHeight={2}
              mt={4}
            >
              {t('title.content.1')}
            </Text>
            <Box as="ul" width={1}>
              {
                [1, 2, 3, 4].map(i => (
                  <motion.li custom={i}
                    animate="visible"
                    initial="initial"
                    variants={variants}
                    key={i}
                  >
                    <Text as="span"
                      lineHeight={2}
                      fontWeight={400}
                    >
                      {t(`title.content.${i + 1}`)}
                    </Text>
                  </motion.li>
                ))
              }
            </Box>
            <Text as="p"
              lineHeight={2}
              mt={4}
            >
              {t('title.content.6')}
            </Text>
          </Flex>
          <YellowTriangleBottom bottom={-116} />
        </PrimaryCard>
      </Wrapper>
      <Scrollspy 
        items={menuItems.id}
        title={menuItems.title}
      />
      <LazyLoadComponent>
        <DescriptionContainer
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={7}
        > 
          <div></div>
          <Wrapper mt={5} p={0}>
            <WhatIDo />
            <WhoAmI />
            <Tech />
          </Wrapper>
        </DescriptionContainer>
      </LazyLoadComponent>
      <DescriptionContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pb={7}
      > 
        <div></div>
        <Wrapper mt={5} p={0}>
          <WhatIDo />
          <WhoAmI />
          <Tech />
        </Wrapper>
      </DescriptionContainer>
    </React.Fragment>
  )
}

export default Home