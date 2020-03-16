import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Translate } from 'store'
import { Text, Flex } from 'rebass'
import { PrimaryCard } from 'components/UI/cards'
import ProjectCard from './projectCard'
import { Wrapper } from 'components/UI/wrappers'
import ProjectsHero from 'components/UI/projectsHero'
import styled from 'util/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ProjectSkeleton } from 'components/UI/skeletons'

const TitleContainer = styled(Flex)`
  text-transform: lowercase;
  
  h1 {
    font-weight: 300;
    letter-spacing: 1px;
  }
`

const Projects = ({ locale }) => {
  const { checkLang, t, lang } = Translate.useContainer()
  const data = useStaticQuery(graphql`
    query {
      allSanityProject {
        edges {
          node {
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
            projectBody: _rawBody
            slug {
              current
            }
          }
        }
      }
    }
  `)
  const projects = data.allSanityProject.edges;
  const projectsData = projects 
    ? projects.map(({ node }) => <ProjectCard p={node} locale={locale} key={node.id} />)
    : (
      <React.Fragment>
        <ProjectSkeleton />
        <ProjectSkeleton />
        <ProjectSkeleton />
      </React.Fragment>
    )

    useEffect(() => {
    if (lang)
      checkLang('projects')
      
    AOS.init({
      offset: 0,
      once: true
    })


    return () => {
      AOS.refresh()
    }
  }, [lang])

  return (
    <React.Fragment>
      <ProjectsHero />
      <Wrapper isMain >
        <PrimaryCard
          alignItems="center"
          justifyContent="center"
          style={{
            marginTop: -200
          }}
          mb={6}
        >
          <TitleContainer
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Text as="h1" mt={4}
              data-aos="fade-up"
              data-aos-offset="0"
            >
              {t('title.0')}
            </Text>
            <Text as="h1" my={3}
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1500"
            >
              {t('title.1')}
            </Text>
            <Text as="h1" mb={4}
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="3000"
            >
              {t('title.2')}
            </Text>
          </TitleContainer>
        </PrimaryCard>
        { projectsData }
      </Wrapper>
    </React.Fragment>
  )
}

export default Projects
