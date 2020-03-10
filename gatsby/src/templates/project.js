import React from "react"
import { Translate } from 'store'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "components/layout"
import SEO from "components/seo"
import Project from 'components/project'

const ProjectPage = ({ pageContext: { locale }, location, data: { sanityProject } }) => {
  console.log(sanityProject)

  return (
    <Layout locale={locale} location={location} >
      <SEO title={sanityProject.title[locale]} />
      <Translate.Provider>
        <Project locale={locale} p={sanityProject} />
      </Translate.Provider>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityProject(id: { eq: $id }) {
      id
      title {
        en
        es
      }
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      techs {
        logo {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      projectBody: _rawBody
    }
  }
`

export default ProjectPage
