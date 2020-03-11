import yellowTop from 'images/yellowTopTriangle.svg'
import yellowBottom from 'images/yellowBottomTriangle.svg'
import lightBlueTop from 'images/lightBlueTopTriangle.svg'
import lightBlueBottom from 'images/lightBlueBottomTriangle.svg'
import blackTop from 'images/blackTopTriangle.svg'
import blackBottom from 'images/blackBottomTriangle.svg'
import styled, { themeGet } from 'util/styles'
import { Flex, Box, Text } from 'rebass'

/**
 * 
 * PrimaryCard && SecondaryCard are colored from the color's theme schema
 * and the half-triangle design that I made goes inside of the card,
 * usage:
 *    <PrimaryCard>
 *      <YellowTriangleTop top={-116} />
 *      { children }
 *      <YellowTriangleBottom bottom={-116} />
 *    </PrimaryCard>
 * 
 * top && bottom props are pixels mesures and has the exact pixel scale
 * from the half-triangle design that I made and are absolute. I can keep
 * default value -116px, for both would be the same... but just in case :)
 * 
 * Since the half-triangle components are absolute, I need to do the exact
 * mesures IF I want to put content between cards, e.g.:
 *    margin-top: -232px;
 *    margin-bottom: -232px;
 * 
 * those pixels are the exact but * 2, so it could be perfectly centered,
 * just like I did on the main logo.
 * 
 * PD: Made this note for self-help... I truly love myself :)
 * 
 */

export const PrimaryCard = styled(Flex)`
  background-color: ${themeGet('colors.blackDepth.400')};
  color: ${({ contact }) => contact ? '#f5f5f5' : themeGet('colors.primary.A200')};
  position: relative;
  padding: ${({ noP }) => !noP ? themeGet('space.4') : 0}px;
  font-weight: ${themeGet('fontWeights.light')};
  letter-spacing: ${themeGet('letterSpacings.labels')};
  z-index: 1;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background-color: ${themeGet('colors.primary.A200')};
    color: #212121;
  }
`

export const YellowTriangleTop = styled.div`
  background: url(${blackTop}) center center no-repeat;
  width: 100%;
  height: 116px;
  position: absolute;
  top: ${({ top }) => top || 0}px;
  z-index: 1;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background: url(${yellowTop}) center center no-repeat;
  }
`
export const YellowTriangleBottom = styled.div`
  background: url(${blackBottom}) center center no-repeat;
  width: 100%;
  height: 116px;
  position: absolute;
  bottom: ${({ bottom }) => bottom || 0}px;
  z-index: 1;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background: url(${yellowBottom}) center center no-repeat;
  }
`
export const SecondaryCard = styled(Flex)`
  background-color: ${themeGet('colors.blackDepth.400')};
  color: ${({ contact }) => contact ? '#f5f5f5' : themeGet('colors.secondary.A200')};
  position: relative;
  padding: ${({ noP }) => !noP ? themeGet('space.4') : 0}px;
  font-weight: ${themeGet('fontWeights.light')};
  letter-spacing: ${themeGet('letterSpacings.labels')};
  z-index: 1;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background-color: ${({ project }) => project ? themeGet('colors.blackDepth.400') : themeGet('colors.secondary.A200')};
    color: ${({ project }) => project ? '#f5f5f5' : '#212121'};
  }
`

export const LightBlueTriangleTop = styled.div`
  background: url(${blackTop}) center center no-repeat;
  width: 100%;
  height: 116px;
  position: absolute;
  top: ${({ top }) => top || 0}px;
  z-index: 1;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background: url(${lightBlueTop}) center center no-repeat;
  }
`
export const LightBlueTriangleBottom = styled.div`
  background: url(${blackBottom}) center center no-repeat;
  width: 100%;
  height: 116px;
  position: absolute;
  bottom: ${({ bottom }) => bottom || 0}px;
  z-index: 1;

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    background: url(${lightBlueBottom}) center center no-repeat;
  }
`
