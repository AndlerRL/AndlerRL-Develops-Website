import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import React, { useEffect } from "react"
import { Translate } from 'store'
import Layout from "components/layout"
import SEO from "components/seo"
import styled, { themeGet } from 'util/styles'
import Projects from "components/projects"

const ProjectsPage = ({ pathContext: { locale }, location  }) => {
  

  return (
    <Layout location={location} locale={locale}>
      <SEO title="Projects" />
      <Translate.Provider
        initialState={{
          translations: {
            es: translateES,
            en: translateEN
          },
          current: null,
          lang: 'en',
          page: 'projects'
        }}
      >
        <Projects locale={locale} />
      </Translate.Provider>
    </Layout>
  )
}

export default ProjectsPage
