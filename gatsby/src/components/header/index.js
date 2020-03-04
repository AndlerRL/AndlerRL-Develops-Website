import Link from "components/link"
import PropTypes from "prop-types"
import React, { useEffect, useState, useCallback } from "react"
import styled, { themeGet } from 'util/styles'
import { Flex, Box } from 'rebass';
import logo_alt from 'images/new_logo_alt.svg'
import logo_alt_mobile from 'images/new_logo_alt-small.svg'

const HeadTop = styled.header`
  background-color: ${({ isMoved }) => isMoved ? 'transparent' : themeGet('colors.blackDepth.300')};
  position: fixed;
  width: 100%;
  top: 0;
  padding: ${themeGet('space.2')}px ${themeGet('space.3')}px;
  color: #f5f5f5;
  transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms;
  z-index: 1500;
  height: ${themeGet('space.5')}px;

  .Logo__alt {
    background: url(${logo_alt_mobile}) center center no-repeat;
    background-size: contain;
    height: 60%;
    width: 200px;
  }

  a {
    color: #f5f5f5;
    text-decoration: none;
  }

  nav {
    display: none;
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    nav {
      display: flex;
    }

    .Logo__alt {
      background: url(${logo_alt}) center center no-repeat;
      background-size: contain;
      height: 83.33%;
      width: 200px;
    }
  }
`;

const HeadBottom = styled.header`
  background-color: ${themeGet('colors.blackDepth.300')};
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: ${themeGet('space.3')}px;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${themeGet('colors.blackDepth.200')};
  z-index: 1500;

  a {
    color: #f5f5f5;
    text-decoration: none;
    width: 33.333%;
    text-align: center;

    &:not(:last-of-type) {
      border-right: 2px solid ${themeGet('colors.blackDepth.200')};
    }
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    display: none;
  }
`

const Header = ({ siteTitle }) => {
  const [height, setHeight] = useState(0);

  const checkPos = useCallback(
    () => {
      const { scrollY } = window;

      if (height !== scrollY)
        setHeight(scrollY)
    },
    [setHeight, height]
  )

  useEffect(() => {
    const { scrollY } = window;
    
    setHeight(scrollY)
    window.addEventListener('scroll', checkPos)

    return () => {
      window.removeEventListener('scroll', checkPos)
    }
  }, [checkPos])

  return (
    <React.Fragment>
      <HeadTop
        isMoved={height <= 48}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <div className="Logo__alt" />
          <Flex as="nav"
            width={[1 / 2, 5 / 12, 5 / 12]}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Link to="/" >
              Home
            </Link>
            <Box mx={2}>
              |
            </Box>
            <Link to="/projects" >
              Projects
            </Link>
            <Box mx={2}>
              |
            </Box>
            <Link to="/contact-me" >
              Contact me
            </Link>
          </Flex>
        </Flex>
      </HeadTop>
      <HeadBottom>
        <Flex as="nav"
          width={10 / 12}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/" >
            Home
          </Link>
          <Link to="/projects" >
            Projects
          </Link>
          <Link to="/contact-me" >
            Contact me
          </Link>
        </Flex>
      </HeadBottom>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header