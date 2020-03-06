import React, { useEffect } from "react"
import { useTranslate } from 'hooks/useTranslate'
import Layout from "components/layout"
import { Wrapper } from "components/UI/wrappers"
import { Text } from 'rebass'
import SEO from "components/seo"
import { PrimaryCard } from 'components/UI/cards'
import styled, { themeGet } from 'util/styles'
import ProjectsHero from "components/UI/projectsHero"
import ProjectCard from "components/projectCard"

const ProjectsPage = ({ pathContext: { locale }, location  }) => {
  const { t } = useTranslate(locale, 'projects')
  
  return (
    <Layout location={location} locale={locale}>
      <SEO title="Projects" />
      <ProjectsHero />
      <Wrapper isMain >
        <PrimaryCard
          alignItems="center"
          justifyContent="center"
          style={{
            marginTop: -150
          }}
          mb={6}
        >
          <Text as="h1" my={4}>
            {t('test')}
          </Text>
        </PrimaryCard>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Wrapper>
    </Layout>
  )
}

export default ProjectsPage
