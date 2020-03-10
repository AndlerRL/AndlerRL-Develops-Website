import styled, { themeGet } from 'util/styles'
import { Box } from 'rebass'

export const Wrapper = styled(Box)`
  width: 91.666%;
  max-width: ${({ wide }) => wide ? '1366px' : '765px'};
  padding-top: ${({ isMain }) => isMain ? themeGet('space.5') : 0}px;
  position: relative;
  margin-bottom: ${({ isMain }) => isMain ? themeGet('space.8') : 0}px;

  @media screen and (max-width: 1180px) {
    padding-top: ${({ termCon }) => termCon ? themeGet('space.8') : themeGet('space.5')}px;
  }
`

export const Grid = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ isMobile }) => isMobile ? 'column' : 'row'};
  justify-content: ${({ isMobile }) => isMobile ? 'flex-start' : 'center'};
`