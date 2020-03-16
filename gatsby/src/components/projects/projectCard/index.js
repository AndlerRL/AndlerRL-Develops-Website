import React, { useEffect, useState, useCallback } from 'react'
import styled, { themeGet } from 'util/styles'
import { Flex, Box } from 'rebass'
import { Btn } from 'components/UI/btn'
import Image from 'gatsby-image'
import { navigate } from 'gatsby'
import { SecondaryCard } from 'components/UI/cards'
import { Translate } from 'store'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContentContainer = styled(Flex)`
  &:first-of-type {
    border-right: none;

    > figure {
      border-bottom: 5px solid ${themeGet('colors.blackDepth.500')};

      picture,
      img,
      source,
      div {
        width: 100%;
        height: 100%;
      }
    }

    > h3 {
      background-color: ${themeGet('colors.secondary.A700')};
      color: #f5f5f5;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }

  &:last-of-type {
    border-left: none;
  }

  @media screen and (min-width: ${themeGet('breakpoints.o')}) {
    &:first-of-type {
      border-right: 3.5px solid ${themeGet('colors.blackDepth.500')};
    }

    &:last-of-type {
      border-left: 3.5px solid ${themeGet('colors.blackDepth.500')};
    }
  }
`

const ProjectCard = ({ p, locale }) => {
  const { t } = Translate.useContainer()
  const [innerWidth, setInnerWidth] = useState(0)

  const checkWidth = useCallback(
    () => {
      const { innerWidth } = window

      setInnerWidth(innerWidth)
    },
    [setInnerWidth]
  )

  const toProjectHandler = url => {
    const lang = locale === 'es' ? '/es' : ''
    navigate(`${lang}/projects/${url}`)
  }

  useEffect(() => {
    const { innerWidth } = window
    
    AOS.init({
      once: true
    })
    setInnerWidth(innerWidth)
    window.addEventListener('resize', checkWidth)

    return () => {
      AOS.refresh()
      window.removeEventListener('resize', checkWidth)
    }
  }, [checkWidth])
  
  return (
    <SecondaryCard
      contact
      flexDirection={["column", "row", "row"]}
      alignItems="center"
      justifyContent="space-between"
      height={["600px", "400px", "350px"]}
      mb={6}
      data-aos={innerWidth <= 640 ? "fade-up" : "fade-left"}
      data-aos-offset="400"
      noP
      project
    >
      <ContentContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        width={[1, 1 / 2, 1 / 2]}
        height="100%"
      >
        <Box as="figure"
          width={1}
          minHeight="83.333%"
        >
          <Image fluid={p.mainImage.asset.fluid} />
        </Box>
        <Flex as="h3"
          alignItems="center"
          justifyContent="center"
          width={1}
          minHeight="16.666%"
        >
          { p.title[locale] }
        </Flex>
      </ContentContainer>
      <ContentContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        width={[1, 1 / 2, 1 / 2]}
        height="100%"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          width={1}
          minHeight="83.333%"
          p={4}
        >
          { p.projectBody[locale].map((b, i) => i === 0 && b.children[0].text.substr(0, 200)) }…
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          width={1}
          minHeight="16.666%"
        >
          <Btn
            backgroundcolor={['colors.blackDepth.200', 'colors.blackDepth.400']}
            size="large"
            variant="contained"
            style={{ width: '33.33%' }}
            project="true"
            onClick={() => toProjectHandler(p.slug.current)}
          >
            {t('btn')}
          </Btn>
        </Flex>
      </ContentContainer>
    </SecondaryCard>
  )
}

export default ProjectCard
