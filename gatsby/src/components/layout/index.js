import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, theme } from 'util/styles'
import GlobalStyles from 'util/styles/GlobalStyles'
import loadable from '@loadable/component'
import { Translate } from "store"

const LayoutComponent = loadable(() => import('./layoutComponent'))

const Layout = React.memo(({ children, intro, locale }) => {
  const [navLang, setNavLang] = useState(null)

  useEffect(() => {
    const { language } = navigator;
    const nLang = language.match('es') ? 'es' : 'en'

    setNavLang(nLang)
  }, [])

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
            lang: null
          }}
        >
          {
            navLang && <LayoutComponent locale={locale} children={children} />
          }
        </Translate.Provider>
      </ThemeProvider>
  )
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
