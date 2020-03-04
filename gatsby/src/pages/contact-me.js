import React, { useEffect } from "react"
import { useTranslate } from 'hooks/useTranslate'
import Layout from "components/layout"
import Image from "components/image"
import { Wrapper } from "components/UI/wrappers"
import SEO from "components/seo"

const ContactMePage = ({ pathContext: { locale }, location }) => {
  const { t } = useTranslate(locale, 'contact-me')

  return (
    <Layout location={location}>
      <SEO title="Contact Me" />
      <Wrapper isMain >
        {t('test')}
      </Wrapper>
    </Layout>
  )
}

export default ContactMePage
