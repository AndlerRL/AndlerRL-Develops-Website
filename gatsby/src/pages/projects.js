import React from "react"
import { Translate } from 'store'
import Layout from "components/layout"
import SEO from "components/seo"
import Projects from "components/projects"

const ProjectsPage = ({ pageContext: { locale }, location  }) => {
  const projectsDescription = locale === 'es'
    ? `Sobre todo lo que he sido, sobre todo lo que he construido, yace aquí. Lista de proyectos realizados por Andler Develops.`
    : `Above all that I have been, above all that I have build, lies here. Projects list made by Andler Develops.`

  return (
    <Layout location={location} locale={locale}>
      <SEO title="Projects" description={projectsDescription} lang={locale} pageView={`${locale === 'es' ? '/es/' : '/'}projects`} />
      <Translate.Provider>
        <Projects locale={locale} />
      </Translate.Provider>
    </Layout>
  )
}

export default ProjectsPage
