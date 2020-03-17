import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, theme } from 'util/styles'
import GlobalStyles from 'util/styles/GlobalStyles'
import loadable from '@loadable/component'
import { Translate } from "store"
import IntroAnim from 'components/UI/intro'

const LayoutComponent = loadable(() => import('./layoutComponent'))

const Layout = React.memo(({ children, locale, notIntro }) => {
  const [navLang, setNavLang] = useState(null)
  const [intro, setIntro] = useState({
    cOpc: true,
    end: false
  })
  const [path, setPath] = useState('/')
  
  const hideIntro = () => {
    setTimeout(() => {
      setIntro(i => ({
        ...i,
        end: true
      }))
    }, 200)
  }

  const introAnimHandler = () => {
    setIntro(i => ({
      ...i,
      cOpc: false
    }))

    return hideIntro()
  }

  useEffect(() => {
    const { location } = window;

    if (path !== location.pathname) {

      setPath(location.pathname)
    }
  }, [path, setPath])

  useEffect(() => {
    const { language } = navigator;
    const nLang = language.match('es') ? 'es' : 'en'

    setNavLang(nLang)
  }, [])

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles intro={intro} notIntro={notIntro} />
        {
          (path === '/' || path === '/es/') && navLang
          ? <IntroAnim animComplete={introAnimHandler} introEnd={intro} />
          : null
        }
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
