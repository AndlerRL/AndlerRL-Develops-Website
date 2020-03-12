import React, { useEffect } from 'react'

import { 
  PrimaryCard,
  SecondaryCard, 
  YellowTriangleTop,
  YellowTriangleBottom,
  LightBlueTriangleTop,
  LightBlueTriangleBottom,
} from "components/UI/cards"
import HomeHero from "components/UI/codeBackground"
import { Text, Flex, Box } from "rebass"
import { Wrapper } from "components/UI/wrappers"
import { motion } from 'framer-motion'
import logo from 'images/new_logo.svg'
import stationBck from 'images/projects_bg.jpg'
import styled, { themeGet } from 'util/styles'
import { Btn } from 'components/UI/btn'
import Link from "components/link"
import Tech from "./techs"
import { Testimonies } from './testimonies'
import { Translate } from 'store'
import Scrollspy from 'components/UI/scrollspy'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Logo = styled(motion.div)`
  background: url(${logo}) center center no-repeat;
  width: 300px;
  height: 270px;
  background-size: contain;
  top: -200px;
  position: absolute;
  z-index: 2;
`

const DescriptionContainer = styled(Flex)`
  background: url(${stationBck}) center center fixed no-repeat;
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

const Questions = styled(Text)`
  margin: ${themeGet('space.4')}px auto;
  padding: ${themeGet('space.4')}px;
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.75;
  font-weight: 400;
  width: 83.333%;
  background-color: ${themeGet('colors.blackDepth.300')};
  box-shadow: 0 4px 10px 3px #2222;
  scroll-snap-align: start;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background-color: ${themeGet('colors.primary.A100')};
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
  const { checkLang, t } = Translate.useContainer()
  const data = useStaticQuery(graphql`
    {
      allSanityTech(filter: {title: {in: ["HTML5", "JavaScript", "CSS3"]}}, sort: {fields: title}) {
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
  console.log(data)
  const { allSanityTech: { nodes } } = data

  useEffect(() => {
    checkLang(locale, 'index')
    AOS.init()

    return () => {
      AOS.refresh()
    }
  }, [])

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
          style={{
            marginTop: -150
          }}
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
      <DescriptionContainer
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width={1}
        py={5}
      >
        <div></div>
        <Wrapper mt={5} >
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
                [0, 1, 2, 3, 4, 5, 6].map(i => {
                  if (i === 0)
                    return (
                      <Text as="p"
                        lineHeight={2}
                        mb={3}
                        textAlign="left"
                        width={1}
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
                      >
                        <Flex
                          flexDirection="row-reverse"
                          alignItems="center"
                          justifyContent="space-around"
                          width={1}
                          my={4}
                        >
                          { nodes.map(({ logo }, i) => (
                            <ImgContentContainer
                              width={[11 / 12, 4 / 12, 4 / 12]}
                              data-aos="zoom-in"
                              data-aos-delay={(((i + 1) * 3) * 100)}
                              data-aos-anchor-placement="center-bottom"
                              data-aos-once="true"
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
                      <Text as="p"
                        lineHeight={2}
                        mb={3}
                        textAlign="left"
                        width={1}
                        fontWeight="500"
                      >
                        {t(`mainContent.contentMain.${i}`)}
                      </Text>
                    )

                  if (i === 3)
                    return (
                      <Text as="h2"
                        lineHeight={2}
                        mb={3}
                        textAlign="left"
                        width={1}
                      >
                        {t(`mainContent.contentMain.${i}`)}
                      </Text>
                    )

                  if (i >= 4 && i < 6)
                    return (
                      <Questions as="h3"
                        data-aos="zoom-out-up"
                        data-aos-offset="300"
                        data-aos-delay={(i * 2) * 100}
                        data-aos-once="true"
                        data-aos-anchor-placement="center-bottom"
                      >
                        {t(`mainContent.contentMain.${i}`)}
                      </Questions>
                    )

                  if (i === 6)
                    return (
                      <Text as="p"
                        lineHeight={2}
                        my={4}
                        textAlign="left"
                        width={1}
                        fontWeight="400"
                      >
                        {t(`mainContent.contentMain.${i}`)}
                      </Text>
                    )
                })
              }
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
              id="second_s"
            >
              <Text as="h1">
                {t('mainContent.titleSub')}
              </Text>
              <Text as="p"
                lineHeight={2}
                width={1}
                my={4}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Suspendisse interdum consectetur libero id faucibus nisl. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quam elementum pulvinar etiam non quam. Malesuada bibendum arcu vitae elementum curabitur vitae. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Tellus elementum sagittis vitae et leo duis. Justo nec ultrices dui sapien. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Magna eget est lorem ipsum dolor. Consequat semper viverra nam libero justo laoreet sit. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Arcu non odio euismod lacinia at quis risus sed vulputate.
              </Text>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              width={1}
              id="third_s"
              my={4}
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
                backgroundcolor={['colors.secondary.300', 'colors.secondary.500']}
                size="large"
                variant="contained"
              >
                <Link to="/contact-me">
                  {t('btn.contact')}
                </Link>
              </Btn>
              <Btn
                backgroundcolor={['colors.secondary.200', 'colors.secondary.400']}
                size="large"
                variant="contained"
              >
                <Link to="/projects">
                  {t('btn.projects')}
                </Link>
              </Btn>
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