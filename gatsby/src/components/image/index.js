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

  > img.Regular {
    width: 100%;
    height: 100%;
  }
`


export const Image = ({ img }) => {
  const { allFile, allSanityImageAsset } = useStaticQuery(graphql`
    query {
      allFile(filter: {name: {ne: null}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      allSanityImageAsset(filter: {_id: {ne: null}}) {
        edges {
          node {
            id
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  const imgLocalFind = allFile.edges.find(({ node: { name } }) => img.match(name))
  const imgSanityFind = allSanityImageAsset.edges.find(({ node: { id } }) => id === img)

  const fluidImg = imgLocalFind 
    ? imgLocalFind
    : imgSanityFind

  return fluidImg && (
    <ImgContainer>
      { 
        fluidImg.node.fluid
        ? <Img fluid={fluidImg.node.fluid} />
        : <img src={fluidImg.node.publicURL} className="Regular" />
      }
    </ImgContainer>
  )
}
