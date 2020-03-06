import React, { useEffect } from 'react'
import { Translate } from 'store'
import { Text } from 'rebass'
import { PrimaryCard } from 'components/UI/cards'
import ProjectCard from './projectCard'
import { Wrapper } from 'components/UI/wrappers'
import ProjectsHero from 'components/UI/projectsHero'

const Projects = ({ locale }) => {
  const { lang, checkPath, checkLang, changeLang, t } = Translate.useContainer()
  
  useEffect(() => {
    checkLang(locale, 'projects')
  }, [])

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Projects