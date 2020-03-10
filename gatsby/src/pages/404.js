import React from "react"
import { Translate } from 'store'
import Layout from "components/layout"
import SEO from "components/seo"
import NoContent from 'components/404'

const NotFoundPage = ({ pageContext: { locale }, location }) => {
  return (
    <Layout locale={locale} location={location} >
      <SEO title="404: Not found" />
      <Translate.Provider>
        <NoContent locale={locale} />
      </Translate.Provider>
    </Layout>
  )
}

export default NotFoundPage
