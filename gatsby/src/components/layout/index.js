import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider, theme, themeGet } from 'util/styles'
import { Flex } from 'rebass'
import GlobalStyles from 'util/styles/GlobalStyles'

import Header from "components/header"
import Footer from "components/footer"
import { Translate } from "store"

const LayoutContainer = styled(Flex)`
  background: linear-gradient(to top, ${themeGet('colors.blackDepth.300')} 1vh, ${themeGet('colors.blackDepth.500')} 33.33vh);
  min-height: 100vh;
  width: 100%;
`

const Layout = React.memo(({ children, location, intro, locale }) => {

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles intro={intro} />
        <Translate.Provider
          initialState={{
            translations: {
              es: translateES,
              en: translateEN
            },
            current: null,
            lang: 'en',
            page: 'layout'
          }}
        >
          <LayoutContainer
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Header locale={locale} />
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              width={1}
            >
              {children}
            </Flex>
          </LayoutContainer>
          <Footer locale={locale} />
        </Translate.Provider>
      </ThemeProvider>
  )
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
