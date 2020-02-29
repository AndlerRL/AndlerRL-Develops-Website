/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider, theme, themeGet } from 'util/styles'
import { Flex, Text } from 'rebass'
import GlobalStyles from 'util/styles/GlobalStyles'

import Header from "components/header"

const LayoutContainer = styled(Flex)`
  background: linear-gradient(to top, ${themeGet('colors.blackDepth.300')} 1vh, ${themeGet('colors.blackDepth.500')} 33.33vh);
  min-height: 100vh;
  width: 100%;
`

const Footer = styled(Flex)`
  min-height: 45vh;
  width: 100%;
  background-color: ${themeGet('colors.blackDepth.300')};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
      <Header siteTitle={data.site.siteMetadata.title} />
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        width={1}
      >
        {children}
      </Flex>
      </LayoutContainer>
      <Footer
        alignItems="center"
        justifyContent="flex-end"
        flexDirection="column"
        pb={[5, 3, 3]}
      >
        <Text as="p"
          fontWeight="light"
          color="#f5f5f5"
          letterSpacing="0.5px"
          fontSize={1}
        >
          © {new Date().getFullYear()}, ® All rights reserved.
        </Text>
      </Footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
