import Link from "components/link"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import styled, { themeGet } from 'util/styles'
import { Flex, Box } from 'rebass';
import logo_alt from 'images/new_logo_alt.svg'
import logo_alt_mobile from 'images/new_logo_alt-small.svg'
import { Icon } from 'components/UI/icons'
import { Btn } from 'components/UI/btn'
import Tooltip from 'components/UI/tooltip'
import { Translate } from 'store'
import { useScrollCheck } from 'hooks/useScrollCheck'

const HeadTop = styled.header`
  background-color: ${({ isMoved }) => isMoved ? 'transparent' : themeGet('colors.blackDepth.300')};
  position: fixed;
  width: 100%;
  top: ${({ top }) => top !== 0 ? top : 0}px;
  padding: ${themeGet('space.2')}px ${themeGet('space.3')}px;
  color: #f5f5f5;
  transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms,
    top 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 100ms;
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
    }
  }
`;

const HeadBottom = styled.header`
  background-color: ${themeGet('colors.blackDepth.300')};
  position: fixed;
  width: 100%;
  bottom: ${({ bottom }) => bottom !== 0 ? bottom : 0}px;
  padding: ${themeGet('space.3')}px;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${themeGet('colors.blackDepth.200')};
  z-index: 1500;
  transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms,
    bottom 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 100ms;

  nav {
    width: 100%;

    a {
      color: #f5f5f5;
      text-decoration: none;
      width: 33.333%;
      text-align: center;

      &:not(:last-of-type) {
        border-right: 2px solid ${themeGet('colors.blackDepth.200')};
      }
    }
  }

  @media screen and (min-width: ${themeGet('breakpoints.0')}) {
    display: none;
  }
`

const Header = ({ locale }) => {
  const { changeLang, t } = Translate.useContainer()
  const { checkHeadPos, headPos, height } = useScrollCheck()

  useEffect(() => {
    window.addEventListener('scroll', checkHeadPos)

    return () => {
      window.removeEventListener('scroll', checkHeadPos)
    }
  }, [checkHeadPos])

  return (
    <React.Fragment>
      <HeadTop
        isMoved={height <= 48}
        top={headPos.top}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <div className="Logo__alt" />
          <Tooltip text={t('nav.lang')} >
            <Btn onClick={() => changeLang(locale)} >
              <Icon.lang 
                color="#f5f5f5"
                size="42px"  
              />
            </Btn>
          </Tooltip>
          <Flex as="nav"
            width={[1 / 2, 5 / 12, 5 / 12]}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Link to="/"  
            >
              {t('nav.home')}
            </Link>
            <Box mx={2}>
              |
            </Box>
            <Link to="/projects" >
              {t('nav.projects')}
            </Link>
            <Box mx={2}>
              |
            </Box>
            <Link to="/contact-me" >
              {t('nav.contact-me')}
            </Link>
          </Flex>
        </Flex>
      </HeadTop>
      <HeadBottom bottom={headPos.bottom}>
        <Flex as="nav"
          width={10 / 12}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/" >
            {t('nav.home')}
          </Link>
          <Link to="/projects" >
            {t('nav.projects')}
          </Link>
          <Link to="/contact-me" >
            {t('nav.contact-me')}
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
