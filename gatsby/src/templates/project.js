import React from "react"
import { Translate } from 'store'
import { graphql } from 'gatsby'
import Layout from "components/layout"
import SEO from "components/seo"
import Project from 'components/project'

const ProjectPage = ({ pageContext: { locale }, location, data: { sanityProject } }) => {
  const pBody = sanityProject.projectBody[locale]
  
  return (
    <Layout locale={locale} location={location} >
      <SEO 
        title={sanityProject.title[locale]}
        description={`${pBody[0].children[0].text.substr(0, 200)}…`}
        lang={locale}
        pageView={`${locale === 'es' ? '/es/' : '/'}projects/${sanityProject.title[locale]}`}
        thumbnail={sanityProject.mainImage.asset.fluid.src}
      />
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
      mainTech {
        title
        logo {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      techs {
        title
        logo {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      projectUrl
      projectBody: _rawBody
    }
  }
`

export default ProjectPage
