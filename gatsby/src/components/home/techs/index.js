import techTitleEN from 'images/techs-title_en.svg'
import techTitleES from 'images/techs-title_es.svg'
import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { themeGet } from 'util/styles'
import { Flex, Text, Box } from 'rebass'
import { motion } from 'framer-motion'
import Tooltip from 'components/UI/tooltip'

const CategoryTitle = styled(Text)`
  font-family: 'Kalam', cursive;
  width: 100%;
  margin 0 auto;
  text-align: center;
  font-size: ${themeGet('fontSizes.6')}px;
  color: ${themeGet('colors.primary.300')};
  margin-bottom: ${themeGet('space.5')}px;
`

const TechContainer = styled(motion.div)`
  width: ${({ stack }) => stack ? '300px' : '125px'};
  height: 125px;
  margin: 1rem;
  filter: grayscale(75%);

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    width: ${({ stack }) => stack ? '300px' : '150px'};
    height: 150px;
  }
`

const TechTitle = styled.div`
  position: relative;
  width: 83.333%;
  background: url(${({ lang }) => lang === 'en' ? techTitleEN : techTitleES}) center center no-repeat;
  background-size: contain;
  height: 25vh;
  top: -78px;
  margin: auto;
  z-index: 1;
`

const TechComponent = ({ fluid, title, stack }) => {
  return (
    <Tooltip
      text={title}
    >
      <TechContainer
        whileHover={{
          filter: 'grayscale(0%)',
          scale: 1.1
        }}
        stack={stack}
      >
        <Img fluid={fluid} />
      </TechContainer>
    </Tooltip>
  )
}

const Tech = ({ locale }) => {
  const data = useStaticQuery(graphql`
    query {
      allSanityTech(filter: {title: {nin: ["HTML5", "JavaScript", "CSS3"]}}, sort: {fields: title}) {
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

  const frontEnd = nodes.filter(({ category }) => category === 'front-end')
  const backEnd = nodes.filter(({ category }) => category === 'back-end')
  const stack = nodes.filter(({ category }) => category === 'stack')
  const cms = nodes.filter(({ category }) => category === 'cms')
  const saas = nodes.filter(({ category }) => category === 'saas')
  const unitTest = nodes.filter(({ category }) => category === 'unit-test')
  const templateEngine = nodes.filter(({ category }) => category === 'template-engine')
  const bundler = nodes.filter(({ category }) => category === 'bundler')

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      width={1}
      id="techs"
    > 
      <TechTitle lang={locale}  />
      <Box mt={4} width={1}>
        <CategoryTitle as="h1">
          Front-end
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          { frontEnd.map(({ id, title, logo }) => (
            <TechComponent 
              key={id}
              title={title}
              fluid={logo.asset.fluid}
            />
          )) }
        </Flex>
      </Box>
      <Box mt={5} width={1}>
        <CategoryTitle as="h1">
          CMS
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          { cms.map(({ id, title, logo }) => (
            <TechComponent 
              key={id}
              title={title}
              fluid={logo.asset.fluid}
            />
          )) }
        </Flex>
      </Box>
      <Box mt={5} width={1}>
        <CategoryTitle as="h1">
          Bundlers
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          { bundler.map(({ id, title, logo }) => (
            <TechComponent 
              key={id}
              title={title}
              fluid={logo.asset.fluid}
            />
          )) }
        </Flex>
      </Box>
      <Box mt={5} width={1}>
        <CategoryTitle as="h1">
          Back-end
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          { backEnd.map(({ id, title, logo }) => (
            <TechComponent 
              key={id}
              title={title}
              fluid={logo.asset.fluid}
            />
          )) }
        </Flex>
      </Box>
      <Box mt={5} width={1}>
        <CategoryTitle as="h1">
          SaaS
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          { saas.map(({ id, title, logo }) => (
            <TechComponent 
              key={id}
              title={title}
              fluid={logo.asset.fluid}
            />
          )) }
        </Flex>
      </Box>
      <Box mt={5} width={1}>
        <CategoryTitle as="h1"color="#f5f5f5"
          mt={5}
        >
          Template Engine
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          { templateEngine.map(({ id, title, logo }) => (
            <TechComponent 
              key={id}
              title={title}
              fluid={logo.asset.fluid}
            />
          )) }
        </Flex>
      </Box>
      <Box mt={5} width={1}>
        <CategoryTitle as="h1">
          Unit Testing
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          { unitTest.map(({ id, title, logo }) => (
              <TechComponent 
                key={id}
                title={title}
                fluid={logo.asset.fluid}
              />
            )) }
        </Flex>
      </Box>
      <Box mt={5} width={1}>
        <CategoryTitle as="h1">
          Stack Development
        </CategoryTitle>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={1}
        >
          { stack.map(({ id, title, logo }) => (
            <TechComponent 
              key={id}
              title={title}
              fluid={logo.asset.fluid}
              stack
            />
          )) }
        </Flex>
      </Box>
    </Flex>
  )
}


export default Tech;