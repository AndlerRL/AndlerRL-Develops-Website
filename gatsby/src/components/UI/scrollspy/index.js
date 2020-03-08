import React from 'react'
import styled, { themeGet } from 'util/styles'
import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ScrollspyContainer = styled(Scrollspy)`
  position: sticky;
  top: 124px;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  z-index: 1400;
  margin-left: auto;
  margin-bottom: -18.25rem;

  a {
    width: 100%;
    text-decoration: none;
    padding: ${themeGet('space.3')}px;
    color: ${themeGet('colors.blackDepth.100')};
    border-left: 3px solid ${themeGet('colors.blackDepth.100')};
    transition: color 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms,
      border 0.15s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms;
    cursor: pointer;

    &.is-current {
      color: #f5f5f5;
      border-left: 3px solid #f5f5f5;
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

const ScrollspyComponent = ({ items, title }) => (
  <ScrollspyContainer
    componentTag="div"
    items={items}
    currentClassName="is-current"
    offset={100}
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

export default ScrollspyComponent
