import React, { useEffect } from "react"
import { useTranslate } from 'hooks/useTranslate'
import Layout from "components/layout"
import Image from "components/image"
import { Wrapper } from "components/UI/wrappers"
import SEO from "components/seo"

const ProjectsPage = ({ pathContext: { locale }, location  }) => {
  const { t, changeLang } = useTranslate(locale, 'projects')
  
  return (
    <Layout location={location} changeLang={changeLang}>
      <SEO title="Projects" />
      <Wrapper isMain >
        {t('test')}
      </Wrapper>
    </Layout>
  )
}

export default ProjectsPage
