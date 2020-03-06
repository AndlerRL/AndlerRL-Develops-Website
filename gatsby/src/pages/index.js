import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import Layout from "components/layout"
import React, { useEffect, useState } from "react"
import { Translate } from 'store'
import SEO from "components/seo"
import IntroAnim from 'components/UI/intro'
import Home from "components/home"

const IndexPage = React.memo(({ pathContext: { locale }, location  }) => {
  const [intro, setIntro] = useState(true)

  return (
    <Layout location={location} locale={locale} intro={intro}>
      <SEO title="Home" />
      <IntroAnim animComplete={() => {setIntro(false)}} introEnd={!intro} />
      <Translate.Provider
        initialState={{
          translations: {
            es: translateES,
            en: translateEN
          },
          current: null,
          lang: 'en',
          page: 'index'
        }}
      >
        <Home locale={locale} />
      </Translate.Provider>
    </Layout>
  )
})

export default IndexPage
