import React, { useEffect } from 'react'
import styled, { themeGet } from 'util/styles'
import { Flex, Box, Text} from 'rebass'
import { Btn } from 'components/UI/btn'
import { Icon } from 'components/UI/icons'
import Image from 'components/image'
import { SecondaryCard } from 'components/UI/cards'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ImgContainer = styled.figure`

`

const ContentContainer = styled(Flex)`
  &:first-of-type {
    border-right: 3.5px solid ${themeGet('colors.blackDepth.500')};

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
    border-left: 3.5px solid ${themeGet('colors.blackDepth.500')};
  }
`

const ProjectCard = ({  }) => {
  useEffect(() => {
    AOS.init()

    return () => {
      AOS.refresh()
    }
  }, [])
  
  return (
    <SecondaryCard
      alignItems="center"
      justifyContent="space-between"
      height="350px"
      mb={6}
      data-aos="fade-left"
      noP
    >
      <ContentContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        width={1 / 2}
        height="100%"
      >
        <Box as="figure"
          width={1}
          minHeight="83.333%"
        >
          <Image img="home_hero_fb.jpg" />
        </Box>
        <Flex as="h3"
          alignItems="center"
          justifyContent="center"
          width={1}
          minHeight="16.666%"
        >
          Orci eu Lobortis
        </Flex>
      </ContentContainer>
      <ContentContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        width={1 / 2}
        height="100%"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          width={1}
          minHeight="83.333%"
          p={4}
        >
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Pretium quam vulputate dignissim suspendisse in est ante. Et molestie ac feugiat sed lectus vestibulum mattis.'.substr(0, 250)}…
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          width={1}
          minHeight="16.666%"
        >
          <Btn
            backgroundcolor={['colors.secondary.200', 'colors.secondary.400']}
            size="large"
            variant="contained"
            style={{ width: '33.33%' }}
          >
            Action btn
          </Btn>
        </Flex>
      </ContentContainer>
    </SecondaryCard>
  )
}

export default ProjectCard
