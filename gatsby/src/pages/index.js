import Layout from "components/layout"
import React, { useState } from "react"
import { Translate } from 'store'
import SEO from "components/seo"
import loadable from '@loadable/component'

const Home = loadable(() => import('components/home'))

const IndexPage = React.memo(({ pageContext: { locale }, location  }) => {
  return (
    <React.Fragment>
      <SEO title="Home" lang={locale} pageView={`${locale === 'es' ? '/es/' : '/'}`} />
      <Layout notIntro={true} locale={locale}>
        <Translate.Provider>
          <Home locale={locale} />
        </Translate.Provider>
      </Layout>
    </React.Fragment>
  )
})

export default IndexPage
