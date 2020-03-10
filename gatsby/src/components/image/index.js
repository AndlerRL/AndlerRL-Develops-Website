import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "util/styles"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ImgContainer = styled.div`
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  z-index: 2;
`


export const Image = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(filter: {fluid: {originalName: {ne: null}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
      allSanityImageAsset(filter: {_id: {ne: null}}) {
        edges {
          node {
            id
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  const { allImageSharp, allSanityImageAsset } = data

  const imgLocalFind = allImageSharp.edges.find(({ node: { fluid } }) => fluid.originalName === fluid)
  const imgSanityFind = allSanityImageAsset.edges.find(({ node: { id } }) => id === fluid)

  const fluidImg = imgLocalFind 
    ? imgLocalFind
    : imgSanityFind

  console.log(fluidImg)

  return (
    <ImgContainer>
      <Img fluid={fluidImg.node.fluid} />
    </ImgContainer>
  )
}