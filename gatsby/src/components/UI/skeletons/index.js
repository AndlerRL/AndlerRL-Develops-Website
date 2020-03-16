import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Flex, Box } from 'rebass'
import styled, { themeGet } from 'util/styles'

const ContentContainer = styled(Flex)`
  border-right: 3.5px solid ${themeGet('colors.blackDepth.500')};
  
  > span.img {
    border-bottom: 5px solid ${themeGet('colors.blackDepth.500')};
  }
`

export const ProjectSkeleton = () => (
  <Flex
    flexDirection={['column', 'row', 'row']}
    alignItems="center"
    justifyContent="space-between"
    height={['600px', '400px', '350px']}
    mb={6}
  >
    <ContentContainer
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      width={[1, 1 / 2, 1 / 2]}
      height="100%"
    >
      <Skeleton variant="rect" width="100%" height="83.333%" animation="pulse" className="img">
        <Box width={1} height="100%" backgroundColor="#121212" />
      </Skeleton>
      <Skeleton variant="rect" width="100%" height="16.666%" animation="pulse">
        <Box width={1} height="100%" backgroundColor="#121212" />
      </Skeleton>
    </ContentContainer>
    <ContentContainer
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      width={[1, 1 / 2, 1 / 2]}
      height="100%"
    >
      <Skeleton variant="rect" width="100%" height="100%" animation="pulse">
        <Flex width={1} height="100%" backgroundColor="#121212"
          alignItems="flex-end"
          justifyContent="center">
        </Flex>
      </Skeleton>
    </ContentContainer>
  </Flex>
)