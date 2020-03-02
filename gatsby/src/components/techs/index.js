import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'util/styles'
import { Flex } from 'rebass'
import { motion } from 'framer-motion'
import Tooltip from 'components/UI/tooltip'

const TechContainer = styled(motion.div)`
  width: 150px;
  height: 150px;
  margin: 1rem;
  filter: grayscale(75%);
`

const Tech = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityTech(filter: {title: {nin: ["HTML5", "JavaScript", "CCS3", "JAMStack"]}}) {
        nodes {
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

  const techs = nodes.map(({ id, title, logo }) => (
    
    <Tooltip
      text={title}
    >
      <TechContainer
        whileHover={{
          filter: 'grayscale(0%)',
          scale: 1.1
        }}
        key={id}
      >
        <Img fluid={logo.asset.fluid} />
      </TechContainer>
    </Tooltip>
  ))

  return (
    <Flex
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      { techs }
    </Flex>
  )
}


export default Tech;