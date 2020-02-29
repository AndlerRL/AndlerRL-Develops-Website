import styled, { themeGet } from 'util/styles'

export const Wrapper = styled.div`
  width: 91.666%;
  max-width: 1000px;
  padding-top: ${({ isMain }) => isMain ? themeGet('space.5') : 0}px;
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