import { Text, Flex, Box } from "rebass"
import { Wrapper } from "components/UI/wrappers"
import { motion } from 'framer-motion'
import Image from "components/image"
import Layout from "components/layout"
import React, { useEffect } from "react"
import Img from 'gatsby-image'
import { useTranslate } from 'hooks/useTranslate'

import { 
  PrimaryCard,
  SecondaryCard, 
  YellowTriangleTop,
  YellowTriangleBottom,
  LightBlueTriangleTop,
  LightBlueTriangleBottom,
} from "components/UI/cards"
import HomeHero from "components/UI/codeBackground"
import logo from 'images/new_logo.svg'
import stationBck from 'images/projects_bg.jpg'
import SEO from "components/seo"
import styled, { themeGet } from 'util/styles'
import { Btn } from 'components/UI/btn'
import Link from "components/link"
import Tech from "components/techs"

const Logo = styled(motion.div)`
  background: url(${logo}) center center no-repeat;
  width: 350px;
  height: 300px;
  background-size: contain;
  top: -232px;
  position: absolute;
`

const DescriptionContainer = styled(Flex)`
  background: url(${stationBck}) center center fixed no-repeat;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  
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

const TechTitle = styled(Flex)`
  position: relative;
  width: 100%;

  h1 {
    position: absolute;
    top: -77px;
    text-shadow: -1px 0 ${themeGet('colors.blackDepth.400')},
      1px 0 ${themeGet('colors.blackDepth.400')},
      0 1px ${themeGet('colors.blackDepth.400')},
      0 -1px ${themeGet('colors.blackDepth.400')};
  }
`

const IndexPage = React.memo(({ pathContext: { locale }, location  }) => {
  const { t, changeLang } = useTranslate(locale, 'index')

  return (
    <Layout location={location} changeLang={changeLang}>
      <SEO title="Home" />
      <HomeHero />
      <Wrapper isMain >
        <PrimaryCard
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{
            marginTop: -125
          }}
          mb={7}
        >
          <YellowTriangleTop top={-116} />
          <Logo
            initial={{
              opacity: 0,
              scale: 0.25,
              y: -300,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              ease: 'circOut',
              duration: 0.75,
              delay: 0.15
            }}
          />
          <Text as="h1"
            mt={5}
            letterSpacing={3}
          >
            {t('test.1')}
          </Text>
          <Text as="p"
            lineHeight={2}
            width={10/12}
            my={4}
          >
            Nam aliquam sem et tortor consequat id porta. Tempor id eu nisl nunc mi ipsum. Leo integer malesuada nunc vel. Neque volutpat ac tincidunt vitae. Non arcu risus quis varius quam. Lectus magna fringilla urna porttitor rhoncus. At tellus at urna condimentum mattis pellentesque. Donec ac odio tempor orci dapibus ultrices in. Elementum pulvinar etiam non quam lacus suspendisse. A diam maecenas sed enim ut sem. Varius morbi enim nunc faucibus.
          </Text>
          <YellowTriangleBottom bottom={-116} />
        </PrimaryCard>
      </Wrapper>
      <DescriptionContainer
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width={1}
        py={7}
      >
        <div></div>
        <Wrapper>
          <PrimaryCard
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <YellowTriangleTop top={-116} />
            <Text as="h2">
              Yellowish Card
            </Text>
            <Text as="p"
              lineHeight={2}
              width={10/12}
              my={4}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Suspendisse interdum consectetur libero id faucibus nisl. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quam elementum pulvinar etiam non quam. Malesuada bibendum arcu vitae elementum curabitur vitae. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Tellus elementum sagittis vitae et leo duis. Justo nec ultrices dui sapien. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Magna eget est lorem ipsum dolor. Consequat semper viverra nam libero justo laoreet sit. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Arcu non odio euismod lacinia at quis risus sed vulputate.
            </Text>
            <Text as="p"
              lineHeight={2}
              width={10/12}
              my={4}
            >
              Nam aliquam sem et tortor consequat id porta. Tempor id eu nisl nunc mi ipsum. Leo integer malesuada nunc vel. Neque volutpat ac tincidunt vitae. Non arcu risus quis varius quam. Lectus magna fringilla urna porttitor rhoncus. At tellus at urna condimentum mattis pellentesque. Donec ac odio tempor orci dapibus ultrices in. Elementum pulvinar etiam non quam lacus suspendisse. A diam maecenas sed enim ut sem. Varius morbi enim nunc faucibus.
            </Text>
            <YellowTriangleBottom bottom={-116} />
          </PrimaryCard>
          <SecondaryCard
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            my={6}
          >
            <LightBlueTriangleTop top={-116} />
            <Text as="h2">
              LightBlueish Card
            </Text>
            <Text as="p"
              lineHeight={2}
              width={10/12}
              my={4}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Suspendisse interdum consectetur libero id faucibus nisl. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quam elementum pulvinar etiam non quam. Malesuada bibendum arcu vitae elementum curabitur vitae. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Tellus elementum sagittis vitae et leo duis. Justo nec ultrices dui sapien. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Magna eget est lorem ipsum dolor. Consequat semper viverra nam libero justo laoreet sit. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Arcu non odio euismod lacinia at quis risus sed vulputate.
            </Text>
            <Text as="p"
              lineHeight={2}
              width={10/12}
              my={4}
            >
              Nam aliquam sem et tortor consequat id porta. Tempor id eu nisl nunc mi ipsum. Leo integer malesuada nunc vel. Neque volutpat ac tincidunt vitae. Non arcu risus quis varius quam. Lectus magna fringilla urna porttitor rhoncus. At tellus at urna condimentum mattis pellentesque. Donec ac odio tempor orci dapibus ultrices in. Elementum pulvinar etiam non quam lacus suspendisse. A diam maecenas sed enim ut sem. Varius morbi enim nunc faucibus.
            </Text>
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
                  contact me
                </Link>
              </Btn>
              <Btn
                backgroundcolor={['colors.secondary.200', 'colors.secondary.400']}
                size="large"
                variant="contained"
              >
                <Link to="/projects">
                  see projects
                </Link>
              </Btn>
            </Flex>
            <LightBlueTriangleBottom bottom={-116} />
          </SecondaryCard>
          <TechTitle
            alignItems="center"
            justifyContent="center"
          >
            <Text
              as="h1"
              fontSize={7}
              textAlign="center"
            >
              TECHS THAT I WORK WITH
            </Text>
          </TechTitle>
          <Tech />
        </Wrapper>
      </DescriptionContainer>
    </Layout>
  )
})

export default IndexPage
