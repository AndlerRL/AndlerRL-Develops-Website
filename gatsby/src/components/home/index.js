import React, { useLayoutEffect } from 'react'
import { Text, Flex, Box } from "rebass"
import { motion } from 'framer-motion'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { 
  PrimaryCard,
  SecondaryCard, 
  YellowTriangleTop,
  YellowTriangleBottom,
  LightBlueTriangleTop,
  LightBlueTriangleBottom,
} from "components/UI/cards"
import HomeHero from "components/UI/codeBackground"
import { Wrapper } from "components/UI/wrappers"
import logo from 'images/new_logo.svg'
import stationBck from 'images/projects_bg.jpg'
import styled, { themeGet } from 'util/styles'
import { Btn } from 'components/UI/btn'
import Link from "components/link"
import Tech from "./techs"
import { Testimonies } from './testimonies'
import { Translate } from 'store'
import Scrollspy from 'components/UI/scrollspy'
import { Image } from 'components/image'
import { Icon } from 'components/UI/icons'
import lorax from 'images/the-lorax.png'

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

const DescriptionContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: ${themeGet('space.5')}px;
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
    }
  }
`

const Questions = styled(Box)`
  background-color: ${themeGet('colors.blackDepth.300')};
  box-shadow: 0 4px 10px 3px #2222;
  scroll-snap-align: start;

  h3 {
    padding: ${themeGet('space.4')}px;
    text-align: center;
    letter-spacing: 2px;
    line-height: 1.75;
    font-weight: 400;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background-color: ${themeGet('colors.primary.A100')};
  }
`

const QuestionsSecondary = styled(Box)`
  background-color: ${themeGet('colors.blackDepth.300')};
  box-shadow: 0 4px 10px 3px #2222;
  scroll-snap-align: start;

  h3 {
    padding: ${themeGet('space.4')}px;
    text-align: center;
    letter-spacing: 2px;
    line-height: 1.75;
    font-weight: 400;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background-color: ${themeGet('colors.secondary.A100')};
  }
`

const Quote = styled(Flex)`
  background: ${themeGet('colors.secondary.A100')} url(${lorax}) center center no-repeat;
  background-size: 50% auto;
  box-shadow: 0 4px 10px 3px #2222;
  scroll-snap-align: start;
  position: relative;
  color: #212121;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    color: inherit;
  }
`

const ImgContentContainer = styled(Box)`
  height: 30%;
  filter: invert(1) grayscale(1);

  picture,
  image,
  iframe {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    filter: invert(0) grayscale(0);
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
    x: 100
  }
}

const Home = ({ locale }) => {
  const { checkLang, t, lang } = Translate.useContainer()
  const data = useStaticQuery(graphql`
    {
      allSanityTech(filter: {title: {in: ["HTML5", "JavaScript", "CSS3", "JAMStack", "MERN Stack", "MEAN Stack"]}}, sort: {fields: title}) {
        nodes {
          category
          title
          logo {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)
  const { allSanityTech: { nodes } } = data

  useLayoutEffect(() => {
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
          mt={["-116px", "150px", "150px"]}
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
      <DescriptionContainer> 
        <div></div>
        <Wrapper mt={5}>
          <PrimaryCard
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <YellowTriangleTop top={-116} />
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              width={1}
              id="first_s"
            >
              <Text as="h1" mb={4}>
                {t('mainContent.titleMain')}
              </Text>
              {
                [0, 1, 2, 3, 4, 5, 6, 7].map(i => {
                  if (i === 0)
                    return (
                      <Text as="p"
                        lineHeight={2}
                        mb={3}
                        textAlign="left"
                        width={1}
                        key={i}
                      >
                        {t(`mainContent.contentMain.${i}`)}
                      </Text>
                    )
                  
                  if (i === 1)
                    return (
                      <Flex
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="space-between"
                        key={i}
                      >
                        <Flex
                          flexDirection="row-reverse"
                          alignItems="center"
                          justifyContent="space-around"
                          width={1}
                          my={4}
                        >
                          { nodes.map(({ logo, title }, i) => (title === 'HTML5' || title === 'JavaScript' || title === 'CSS3') && (
                            <ImgContentContainer
                              width={[11 / 12, 4 / 12, 4 / 12]}
                              data-aos="zoom-in"
                              data-aos-delay={(((i + 1) * 3) * 100)}
                              data-aos-anchor-placement="center-bottom"
                              key={i}
                            >
                              <Img fluid={logo.asset.fluid} />
                            </ImgContentContainer>
                          )) }
                        </Flex>
                        <Text as="p"
                          lineHeight={2}
                          mb={3}
                          textAlign="left"
                          width={1}
                        >
                          {t(`mainContent.contentMain.${i}`)}
                        </Text>
                      </Flex>
                    )

                  if (i === 2)
                    return (
                      <Flex
                        flexDirection={["column", "row-reverse", "row"]}
                        alignItems="center"
                        justifyContent="space-between"
                        width={1}
                        key={i}
                      >
                        <Flex
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="space-around"
                          width={[1, 5 / 12, 5 / 12]}
                          height={["500px", "600px", "600px"]}
                          my={4}
                        >
                          { nodes.map(({ logo, title }, i) => (title === 'JAMStack' || title === 'MERN Stack' || title === 'MEAN Stack') && (
                            <ImgContentContainer
                              width={[1, 1, 1]}
                              data-aos="zoom-in"
                              data-aos-delay={(((i + 1) * 2.5) * 100)}
                              data-aos-anchor-placement="center-bottom"
                              key={i}
                            >
                              <Img fluid={logo.asset.fluid} />
                            </ImgContentContainer>
                          )) }
                        </Flex>
                        <Questions
                          width={[1, 1 / 2, 1 / 2]}
                          my={4}
                          data-aos="zoom-out-up"
                          data-aos-offset="250"
                          data-aos-delay={(i * 2) * 100}
                          data-aos-anchor-placement="center-bottom"
                        >
                          <Text as="h3">
                            {t(`mainContent.contentMain.${i}`)}
                          </Text>
                        </Questions>
                      </Flex>
                    )

                  if (i === 3)
                    return (
                      <Text as="p"
                        lineHeight={2}
                        mb={3}
                        textAlign="left"
                        width={1}
                        fontWeight="500"
                        key={i}
                      >
                        {t(`mainContent.contentMain.${i}`)}
                      </Text>
                    )

                  if (i === 4)
                    return (
                      <Text as="h2"
                        lineHeight={2}
                        mb={3}
                        textAlign="left"
                        width={1}
                        key={i}
                      >
                        {t(`mainContent.contentMain.${i}`)}
                      </Text>
                    )

                  if (i === 5 || i === 6)
                    return (
                      <Questions
                        style={{ width: '83.333%' }}
                        my={4}
                        data-aos="zoom-out-up"
                        data-aos-offset="250"
                        data-aos-delay={(i * 2) * 100}
                        data-aos-anchor-placement="center-bottom"
                        key={i}
                      >
                        <Text as="h3">
                          {t(`mainContent.contentMain.${i}`)}
                        </Text>
                      </Questions>
                    )

                  if (i === 7)
                    return (
                      <Text as="p"
                        lineHeight={2}
                        my={4}
                        textAlign="left"
                        width={1}
                        fontWeight="400"
                        key={i}
                      >
                        {t(`mainContent.contentMain.${i}`)}
                      </Text>
                    )
                })
              }
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              width={1}
              id="second_s"
              mt={5}
              mb={4}
            >
              <Text as="h2"
                width={[1, 10 / 12, 10 / 12]}
                textAlign="left"
                letterSpacing={2}
              >
                {t('testimonies.title')}
              </Text>
              <Testimonies locale={locale} t={t} />
            </Flex>
            <Flex
              width={1}
              alignItems="center"
              justifyContent="space-around"
            >
              <Btn
                backgroundcolor={['colors.primary.300', 'colors.primary.500']}
                size="large"
                variant="contained"
              >
                <Link to="/contact-me">
                  {t('btn.contact')}
                </Link>
              </Btn>
              <Btn
                backgroundcolor={['colors.primary.200', 'colors.primary.400']}
                size="large"
                variant="contained"
              >
                <Link to="/projects">
                  {t('btn.projects')}
                </Link>
              </Btn>
            </Flex>
            <YellowTriangleBottom bottom={-116} />
          </PrimaryCard>

          <SecondaryCard
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            my={6}
          >
            <LightBlueTriangleTop top={-116} />
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              width={1}
              id="third_s"
            >
              <Text as="h1">
                {t('mainContent.titleSub')}
              </Text>
              { 
                [0, 1, 2, 3, 4, 5, 6, 7].map(i => {
                  if (i <= 1)
                    return (
                      <Text as="p"
                        lineHeight={2}
                        width={1}
                        my={4}
                        key={i}
                      >
                        {t(`mainContent.contentSub.${i}`)}
                      </Text>
                    )
                  
                  if (i === 2 || i === 3) {
                    if (i === 2)
                      return (
                        <Flex
                          flexDirection={["column", "row-reverse", "row"]}
                          alignItems="center"
                          justifyContent="space-between"
                          width={1}
                          my={4}
                          key={i}
                        >
                          <Box width={[1, 1 / 2, 1 / 2]}
                            height={["300px", "400px", "400px"]}
                            data-aos="fade-up"
                            my={2}
                          >
                            <Image img="first-pc" />
                          </Box>
                          <Flex
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="space-around"
                            width={[1, 1 / 2, 1 / 2]}
                          >
                            <QuestionsSecondary
                              width={1}
                              my={4}
                              data-aos="zoom-out-up"
                              data-aos-offset="250"
                              data-aos-delay={(i * 2) * 100}
                              data-aos-anchor-placement="center-bottom"
                            >
                              <Text as="h3">
                                {t(`mainContent.contentSub.${i}`)}
                              </Text>
                            </QuestionsSecondary>
                            <QuestionsSecondary
                              width={1}
                              my={4}
                              data-aos="zoom-out-up"
                              data-aos-offset="250"
                              data-aos-delay={(i + 1 * 2) * 100}
                              data-aos-anchor-placement="center-bottom"
                            >
                              <Text as="h3">
                                {t(`mainContent.contentSub.${i + 1}`)}
                              </Text>
                            </QuestionsSecondary>
                          </Flex>
                        </Flex>
                      )
                  }

                  if (i === 4 || i === 5 )
                    return (
                      <Text as="p"
                        lineHeight={2}
                        width={1}
                        my={4}
                        key={i}
                      >
                        {t(`mainContent.contentSub.${i}`)}
                      </Text>
                    )

                  if (i >= 6)
                    return (
                      <QuestionsSecondary
                        width={[1, 11 / 12, 11 / 12]}
                        my={4}
                        data-aos="fade-up"
                        data-aos-delay={(i * 2) * 100}
                        data-aos-anchor-placement="center-bottom"
                        key={i}
                      >
                        <Text as="h3">
                          {t(`mainContent.contentSub.${i}`)}
                        </Text>
                      </QuestionsSecondary>
                    )
                })
              }
              <Quote
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width={[1, 9 / 12, 9 / 12]}
                p={[3, 5, 5]}
                my={5}
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
              >
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ position: 'relative' }}
                  width={1}
                  my={[3, 0, 0]}
                >
                  <Icon.quoteLeft size="32px" style={{ opacity: 0.5, position: 'absolute', top: '8px', left: 0 }} />
                    <Text as="p"
                      lineHeight={2}
                      fontWeight="500"
                      px={5}
                      py={[4, 3, 3]}
                      style={{ fontStyle: 'oblique' }}
                    >
                      {t('mainContent.quote.content')}
                    </Text>
                  <Icon.quoteRight size="32px" style={{ opacity: 0.5, position: 'absolute', bottom: '8px', right: 0 }} />
                </Flex>
                <Text as="p"
                  textAlign="left"
                  p={3}
                  width={1}
                  style={{ fontStyle: 'oblique', bottom: 0, position: 'absolute' }}
                  fontSize={1}
                >
                  - {t('mainContent.quote.credits')}
                </Text>
              </Quote>
            </Flex>
            <LightBlueTriangleBottom bottom={-116} />
          </SecondaryCard>
          <Tech locale={locale} />
        </Wrapper>
      </DescriptionContainer>
    </React.Fragment>
  )
}

export default Home