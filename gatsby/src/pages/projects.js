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
    <React.Fragment>
      <SEO title="Projects" description={projectsDescription} lang={locale} pageView={`${locale === 'es' ? '/es/' : '/'}projects`} />
      <Layout notIntro={true} locale={locale}>
        <Translate.Provider>
          <Projects locale={locale} />
        </Translate.Provider>
      </Layout>
    </React.Fragment>
  )
}

export default ProjectsPage
