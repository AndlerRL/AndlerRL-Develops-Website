import React, { useEffect } from "react"
import { Translate } from 'store'
import Layout from "components/layout"
import SEO from "components/seo"
import styled, { themeGet } from 'util/styles'
import Projects from "components/projects"

const ProjectsPage = ({ pageContext: { locale }, location  }) => {
  
  return (
    <Layout location={location} locale={locale}>
      <SEO title="Projects" />
      <Translate.Provider>
        <Projects locale={locale} />
      </Translate.Provider>
    </Layout>
  )
}

export default ProjectsPage
