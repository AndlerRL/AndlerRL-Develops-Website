import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { themeGet } from 'util/styles'
import { Flex, Text, Box } from 'rebass'
import { motion } from 'framer-motion'
import Tooltip from 'components/UI/tooltip'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CategoryTitle = styled(Text)`
  font-family: 'Kalam', cursive;
  width: 100%;
  margin 0 auto;
  text-align: center;
  font-size: ${themeGet('fontSizes.6')}px;
`

const TechContainer = styled(motion.div)`
  width: ${({ stack }) => stack ? '300px' : '150px'};
  height: 150px;
  margin: 1rem;
  filter: grayscale(75%);
`

const TechComponent = ({ fluid, title, stack }) => {
  useEffect(() => {
    AOS.init()

    return () => {
      AOS.refresh()
    }
  })
  
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

const Tech = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityTech(filter: {title: {nin: ["HTML5", "JavaScript", "CCS3"]}}, sort: {fields: title}) {
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

  useEffect(() => {
    AOS.init({
      offset: 250,
      once: false
    })

    return () => {
      AOS.refresh()
    }
  })

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
    >
      <Box mt={6} width={1}>
        <CategoryTitle as="h1"
          data-aos="zoom-in"
          data-aos-offset="150"
          color="#f5f5f5"
          textAlign="center"
        >
          Front-end
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          data-aos="zoom-in"
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
      <Box mt={6} width={1}>
        <CategoryTitle as="h1"
          data-aos="zoom-in"
          data-aos-offset="150"
          color="#f5f5f5"
          mt={6}
        >
          CMS
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          data-aos="zoom-in"
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
      <Box mt={6} width={1}>
        <CategoryTitle as="h1"
          data-aos="zoom-in"
          data-aos-offset="150"
          color="#f5f5f5"
          mt={6}
        >
          Bundlers
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          data-aos="zoom-in"
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
      <Box mt={6} width={1}>
        <CategoryTitle as="h1"
          data-aos="zoom-in"
          data-aos-offset="150"
          color="#f5f5f5"
          mt={6}
        >
          Back-end
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          data-aos="zoom-in"
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
      <Box mt={6} width={1}>
        <CategoryTitle as="h1"
          data-aos="zoom-in"
          data-aos-offset="150"
          color="#f5f5f5"
          mt={6}
        >
          SaaS
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          data-aos="zoom-in"
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
      <Box mt={6} width={1}>
        <CategoryTitle as="h1"
          data-aos="zoom-in"
          data-aos-offset="150"
          color="#f5f5f5"
          mt={6}
        >
          Template Engine
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          data-aos="zoom-in"
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
      <Box mt={6} width={1}>
        <CategoryTitle as="h1"
          data-aos="zoom-in"
          data-aos-offset="150"
          color="#f5f5f5"
          mt={6}
        >
          Unit Testing
        </CategoryTitle>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          data-aos="zoom-in"
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
      <Box mt={6} width={1}>
        <CategoryTitle as="h1"
          data-aos="zoom-in"
          data-aos-offset="150"
          color="#f5f5f5"
          mt={6}
        >
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