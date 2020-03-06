import React, { useEffect } from "react"
import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import { Translate } from 'store'
import Layout from "components/layout"
import SEO from "components/seo"
import ContactMe from "components/contact-me"

const ContactMePage = ({ pathContext: { locale }, location }) => {

  return (
    <Layout location={location} locale={locale}>
      <SEO title="Contact Me" />
      <Translate.Provider
        initialState={{
          translations: {
            es: translateES,
            en: translateEN
          },
          current: null,
          lang: 'en',
          page: 'contact-me'
        }}
      >
        <ContactMe locale={locale} />
      </Translate.Provider>
    </Layout>
  )
}

export default ContactMePage
