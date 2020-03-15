import React, { useLayoutEffect } from 'react'
import styled, { themeGet } from 'util/styles'
import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useScrollCheck } from 'hooks/useScrollCheck'

const ScrollspyContainer = styled(Scrollspy)`
  position: sticky;
  top: ${({ isMoved }) => isMoved && isMoved}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: ${({ item }) => item < 65 ? 1400 : -1};
  margin-left: auto;
  margin-bottom: -19rem;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  background-color: ${({ item }) => item < 65 ? themeGet('colors.blackDepth.500') : 'transparent'};
  opacity: ${({ item }) => item < 65 ? 1 : 0};
  height: calc(${themeGet('space.5')}px - 5px );
  transition: top 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 100ms,
    background-color 0.15s cubic-bezier(0.785, 0.135, 0.15, 0.86) 75ms,
    opacity 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  font-size: ${themeGet('fontSizes.1')}px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: ${themeGet('space.3')}px;
    color: ${themeGet('colors.blackDepth.100')};
    border-left: none;
    border-bottom: 3px solid ${themeGet('colors.blackDepth.100')};
    transition: color 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms,
      border 0.15s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms;
    cursor: pointer;

    &.is-current {
      color: #f5f5f5;
      border-color: #f5f5f5;
    }
  }

  @media screen and (min-width: 1024px) {
    width: auto;
    top: 124px;
    flex-direction: column;
    background-color: transparent;
    max-width: 130px;
    overflow-x: none;
    height: auto;
    font-size: ${themeGet('fontSizes.2')}px;
    opacity: 1;
    z-index: 1400;

    a {
      border-left: 3px solid ${themeGet('colors.blackDepth.100')};
      border-bottom: none;
      justify-content: flex-start;
    }
  }
`

/**
 * 
 * Personal Note:
 * 
 * The items prop, it's an array that takes the id of the ref space on page.
 * 
 * For each item array value, it would have two values:
 *    { 
 *      id,
 *      title: t('')
 *    }
 * 
 * That represent an array value.
 * 
 */

const ScrollspyComponent = ({ items, title }) => {
  const { checkMenuPos, checkSubMenuPos, menuPos, subHeadPos } = useScrollCheck()

  useLayoutEffect(() => {
    window.addEventListener('scroll', checkSubMenuPos)

    return () => {
      window.removeEventListener('scroll', checkSubMenuPos)
    }
  }, [checkSubMenuPos])

  const itemPos = menuPos && menuPos.getBoundingClientRect()

  useLayoutEffect(() => {
    checkMenuPos()
  }, [menuPos, checkMenuPos])

  return (
    <ScrollspyContainer
      componentTag="div"
      items={items}
      currentClassName="is-current"
      offset={0}
      isMoved={subHeadPos}
      item={itemPos && itemPos.top}
    >
      { items.map((a, i) => (
        <AnchorLink 
          href={`#${a}`}
          key={i}
        >
          { title[i] }
        </AnchorLink>
      )) }
    </ScrollspyContainer>
  )
} 

export default ScrollspyComponent
