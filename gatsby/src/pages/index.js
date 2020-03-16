import Layout from "components/layout"
import React, { useState } from "react"
import { Translate } from 'store'
import SEO from "components/seo"
import loadable from '@loadable/component'

const Home = loadable(() => import('components/home'))

const IndexPage = React.memo(({ pageContext: { locale }, location  }) => {
  return (
    <Layout locale={locale}>
      <SEO title="Home" lang={locale} pageView={`${locale === 'es' ? '/es/' : '/'}`} />
      <Translate.Provider>
        <Home locale={locale} />
      </Translate.Provider>
    </Layout>
  )
})

export default IndexPage
