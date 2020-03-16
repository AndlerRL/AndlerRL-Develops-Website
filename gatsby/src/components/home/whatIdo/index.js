import { Btn } from 'components/UI/btn'
import { Flex, Box, Text } from 'rebass'
import { Translate } from 'store'
import { useStaticQuery, graphql } from 'gatsby'
import AOS from 'aos'
import Img from 'gatsby-image'
import Link from "components/link"
import loadable from '@loadable/component'
import React, { useEffect } from 'react'
import styled, { themeGet } from 'util/styles'

import 'aos/dist/aos.css'

import {
  PrimaryCard,
  YellowTriangleBottom,
  YellowTriangleTop
} from 'components/UI/cards'

const Testimonies = loadable(() => import('../testimonies'))

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

const WhatIDo = () => {
  const { t } = Translate.useContainer()
  const { allSanityTech: { nodes }} = useStaticQuery(graphql`
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

  useEffect(() => {
    AOS.init({
      once: true
    })

    return () => {
      AOS.refresh()
    }
  }, [])

  return (
    <PrimaryCard
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <YellowTriangleTop top={-115} />
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
                    my={5}
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
        <Testimonies />
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
  )
}

export default WhatIDo
