import React from 'react'
import { Flex, Text, Box } from 'rebass'
import styled, { themeGet } from 'util/styles'
import { Wrapper } from 'components/UI/wrappers'
import {
  YellowTriangleTop,
  PrimaryCard,
  SecondaryCard,
} from 'components/UI/cards'
import Img from 'gatsby-image'
import { Image } from 'components/image'

const ImgMainContainer = styled.div`
  width: 100%;
  height: 66vh;
  border-bottom: 6px solid ${themeGet('colors.blackDepth.400')};
  z-index: 1;
  margin-top: 64px;
  position: relative;

  picture,
  img,
  source,
  div {
    width: 100%;
    height: 100%;
  }

  > div.cover {
    background-color: ${themeGet('colors.blackDepth.500')}80;
    width: 100%;
    height: calc(100% + 64px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`

const ImgContentContainer = styled(Box)`
  width: 100%; 
  height: 300px;
  z-index: 2;

  &:not(:nth-child(4)) {
    width: 50%;
  }

  picture,
  img,
  source,
  div {
    width: 100%;
    height: 100%;
  }
`

const TitleContainer = styled(Flex)`
  position: relative;
  background-color: ${themeGet('colors.primary.A200')};
  max-width: 50%;
  height: 10rem;
  color: #212121;
  z-index: 1;
  border: 3px solid ${themeGet('colors.blackDepth.400')};
`

const Project = ({ locale, p }) => {

  const body = p.projectBody[locale].map((b, i) => {
    if (b._type === 'block')
      return (
        <Text as="p" my={4}>
          {b.children[0].text}
        </Text>
      )
    if (b._type === 'contentImage')
      return (
        <ImgContentContainer my={4}>
          <Image fluid={b.asset._ref} />
        </ImgContentContainer>
      )
  }) //text && contentImage blocks

  return (
    <React.Fragment>
      <ImgMainContainer>
        <div className="cover" />
        <Img fluid={p.mainImage.asset.fluid} />
      </ImgMainContainer>
      <Wrapper isMain>
        <TitleContainer
          alignItems="flex-start"
          justifyContent="center"
          mt="-125px"
          p={4}
        >
          <Text as="h1">
            {p.title[locale]}
          </Text>
        </TitleContainer>

        <PrimaryCard
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={7}
        >
          <YellowTriangleTop top={-116} />
          { body }
        </PrimaryCard>
        <Box height="6px" backgroundColor="colors.blackDepth.400" />
        <SecondaryCard
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          mb={7}
          pb={4}
          px={4}
        >
          <Flex
            flexWrap="wrap"
            justifyContent="flex-start"
            alignItems="center"
            width={1}
          >
            {
              p.techs.map(t => (
                <Box width="100px" height="100px">
                  <Img fluid={t.logo.asset.fluid} />
                </Box>
              ))
            }
          </Flex>
        </SecondaryCard>
      </Wrapper>
    </React.Fragment>
  )
}

export default Project