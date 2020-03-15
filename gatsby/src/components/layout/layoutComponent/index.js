import React, { useLayoutEffect } from 'react'
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

  useLayoutEffect(() => {
    if (lang)
      checkLang('layout')
  }, [lang])

  useLayoutEffect(() => {
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
    </React.Fragment>
  )
}

export default LayoutComponent