import styled, { themeGet } from 'util/styles'

export const Wrapper = styled.div`
  width: 91.666%;
  max-width: 900px;
  padding-top: ${({ isMain }) => isMain ? themeGet('space.5') : 0}px;
  position: relative;
  margin-bottom: ${({ isMain }) => isMain ? themeGet('space.7') : 0}px;

  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    max-width: 1366px;
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