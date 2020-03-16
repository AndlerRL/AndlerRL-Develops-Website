import Layout from "components/layout"
import React, { useState } from "react"
import { Translate } from 'store'
import SEO from "components/seo"
import IntroAnim from 'components/UI/intro'
import loadable from '@loadable/component'

const Home = loadable(() => import('components/home'))

const IndexPage = React.memo(({ pageContext: { locale }, location  }) => {
  const [intro, setIntro] = useState({
    cOpc: true,
    end: false
  })

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

  return (
    <Layout location={location} locale={locale} intro={intro}>
      <SEO title="Home" lang={locale} pageView={`${locale === 'es' ? '/es/' : '/'}`} />
      <IntroAnim animComplete={introAnimHandler} introEnd={intro} />
      <Translate.Provider>
        <Home locale={locale} />
      </Translate.Provider>
    </Layout>
  )
})

export default IndexPage
