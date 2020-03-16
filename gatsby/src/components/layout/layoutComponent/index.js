import React, { useEffect } from 'react'
import { Translate } from 'store'
import Header from "components/header"
import Footer from "components/footer"
import { Flex } from 'rebass'
import styled, { themeGet } from 'util/styles'

const LayoutContainer = styled(Flex)`
  background: linear-gradient(to top, ${themeGet('colors.blackDepth.300')} 1vh, ${themeGet('colors.blackDepth.500')} 33.33vh);
  min-height: 100vh;
  width: 100%;
  position: relative;
`

const LayoutComponent = ({ locale, children }) => {
  const { lang, checkLang, checkPath } = Translate.useContainer()

  useEffect(() => {
    if (lang)
      checkLang('layout')
  }, [lang])

  useEffect(() => {
    if (lang !== locale)
      checkPath(locale)
  }, [lang])

  return (
    <React.Fragment>
      <LayoutContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Header locale={locale} />
        {children}
      </LayoutContainer>
      <Footer locale={locale} />
    </React.Fragment>
  )
}

export default LayoutComponent