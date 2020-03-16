import React from "react"
import { Translate } from 'store'
import Layout from "components/layout"
import SEO from "components/seo"
import NoContent from 'components/404'

const NotFoundPage = ({ pageContext: { locale }, location }) => {
  return (
    <React.Fragment>
      <SEO title="404: Not found" lang={locale} pageView={`${locale === 'es' ? '/es/' : '/'}404`}/>
      <Layout notIntro={true} location={location} >
        <Translate.Provider>
          <NoContent locale={locale} />
        </Translate.Provider>
      </Layout>
    </React.Fragment>
  )
}

export default NotFoundPage
