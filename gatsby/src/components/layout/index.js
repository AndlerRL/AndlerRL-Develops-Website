import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, theme } from 'util/styles'
import GlobalStyles from 'util/styles/GlobalStyles'
import LayoutComponent from './layoutComponent'
import { Translate } from "store"

const Layout = React.memo(({ children, intro, locale }) => {
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
            lang: 'en'
          }}
        >
          <LayoutComponent locale={locale} children={children} />
        </Translate.Provider>
      </ThemeProvider>
  )
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
