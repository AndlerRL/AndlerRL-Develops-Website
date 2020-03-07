import React, { useEffect } from 'react'
import { Translate } from 'store'
import { Text, Flex } from 'rebass'
import { PrimaryCard } from 'components/UI/cards'
import ProjectCard from './projectCard'
import { Wrapper } from 'components/UI/wrappers'
import ProjectsHero from 'components/UI/projectsHero'
import styled, { themeGet } from 'util/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const TitleContainer = styled(Flex)`
  text-transform: lowercase;
  
  h1 {
    font-weight: 300;
    letter-spacing: 1px;
  }
`

const Projects = ({ locale }) => {
  const { checkLang, t } = Translate.useContainer()
  
  useEffect(() => {
    AOS.init({
      offset: 0
    })

    checkLang(locale, 'projects')

    return () => {
      AOS.refresh()
    }
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