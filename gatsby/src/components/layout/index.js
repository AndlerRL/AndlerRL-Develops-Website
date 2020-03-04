import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, navigate } from "gatsby"
import styled, { ThemeProvider, theme, themeGet } from 'util/styles'
import { Flex, Text } from 'rebass'
import GlobalStyles from 'util/styles/GlobalStyles'
import logo_alt from 'images/new_logo_alt.svg'

import Header from "components/header"

const LayoutContainer = styled(Flex)`
  background: linear-gradient(to top, ${themeGet('colors.blackDepth.300')} 1vh, ${themeGet('colors.blackDepth.500')} 33.33vh);
  min-height: 100vh;
  width: 100%;
`

const Footer = styled(Flex)`
  position: relative;

  .Logo__alt {
    position: absolute;
    width: 200px;
    max-width: 33.33%;
    left: 32px;
    top: 0;

    img {
      width: 100%;
    }
  }

  min-height: 45vh;
  width: 100%;
  background-color: ${themeGet('colors.blackDepth.300')};
`

const Layout = React.memo(({ children, location, changeLang }) => {
  const lang = localStorage.getItem('lang')
    ? localStorage.getItem('lang')
    : localStorage.setItem('lang', 'en')

  useEffect(() => {
    if (lang !== 'en' && !location.pathname.match('/es/'))
      navigate(`/${lang}${location.pathname}`)
    else if (location.pathname.match('/es/') && lang === 'en')
      navigate(`/${(location.pathname).substr(3)}`)
  }, [lang])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Header lang={changeLang} />
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
        <div className="Logo__alt">
          <img src={logo_alt} />
        </div>
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
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
