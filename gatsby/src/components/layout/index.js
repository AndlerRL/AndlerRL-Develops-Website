import React, { useEffect, Suspense } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import styled, { ThemeProvider, theme, themeGet } from 'util/styles'
import { Flex } from 'rebass'
import GlobalStyles from 'util/styles/GlobalStyles'
import { useTranslate, useLang } from 'hooks/useTranslate'

import Header from "components/header"
import Footer from "components/footer"

const LayoutContainer = styled(Flex)`
  background: linear-gradient(to top, ${themeGet('colors.blackDepth.300')} 1vh, ${themeGet('colors.blackDepth.500')} 33.33vh);
  min-height: 100vh;
  width: 100%;
`

const Layout = ({ children, location, intro, locale }) => {
  const { t, changeLang } = useTranslate(locale, 'layout')
  const [lang] = useLang()

  useEffect(() => {
    if (lang && lang !== 'en' && !location.pathname.match('/es/')){
      console.log(lang)
      navigate(`/${lang}${location.pathname}`)
    }
    else if (lang && location.pathname.match('/es/') && lang === 'en')
      navigate(`/${(location.pathname).substr(3)}`)
  }, [location.pathname])

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles intro={intro} />
        <LayoutContainer
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Header lang={changeLang} t={t} />
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            width={1}
          >
            {children}
          </Flex>
        </LayoutContainer>
        <Footer t={t} />
      </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
