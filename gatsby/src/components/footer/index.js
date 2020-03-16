import React from 'react'
import styled, { themeGet } from 'util/styles'
import { Flex, Box, Text } from 'rebass'
import { SocialIcons } from 'components/UI/icons'
import Link from 'components/link'
import { motion } from 'framer-motion'
import BackToTop from 'components/UI/backTop'
import logo_alt from 'images/new_logo_alt.svg'
import logo_dark from 'images/new_logo-dark.svg'
import { Translate } from 'store'

const FooterContainer = styled(Flex)`
  position: relative;
  z-index: 2;

  .Logo__alt {
    background: url(${logo_dark}) center center no-repeat;
    background-size: contain;
    position: absolute;
    width: 225px;
    max-width: 33.33%;
    height: 90px;
    left: 32px;
    top: -75px;
    filter: grayscale(25%);
    opacity: 0.75;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      margin: auto;
    }

    @media screen and (min-width: ${themeGet('breakpoints.0')}) {
      height: 150px;
    }
  }

  min-height: 45vh;
  width: 100%;
  background-color: ${themeGet('colors.blackDepth.300')};
`

const anim = {
  transition: {
    ease: 'circInOut',
    duration: 0.15,
    delay: 0.01
  },
  whileHover: {
    filter: 'grayscale(0%)',
    scale: 1.2
  },
  linkHover: {
    letterSpacing: '2px',
  }
}

const Footer = ({ locale }) => {
  const { t } = Translate.useContainer()

  return (
    <FooterContainer
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="column"
      pb={[5, 3, 3]}
    >
      <div className="Logo__alt">
        <img src={logo_alt} alt="logo_alt darkened" />
      </div>
      <Flex
        width={1}
        p={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Box my={2}>
            <Link to="/">
              <motion.span
                whileHover={anim.linkHover}
                transition={anim.transition}
              >
                {t('nav.home')}
              </motion.span>
            </Link>
          </Box>
          <Box my={2}>
            <Link to="/projects">
              <motion.span
                whileHover={anim.linkHover}
                transition={anim.transition}
              >
                {t('nav.projects')}
              </motion.span>
            </Link>
          </Box>
          <Box my={2}>
            <Link to="/contact-me">
              <motion.span
                whileHover={anim.linkHover}
                transition={anim.transition}
              >
                {t('nav.contact-me')}
              </motion.span>
            </Link>
          </Box>
        </Flex>
        <BackToTop />
      </Flex>
      <SocialIcons mb={4} />
      <Flex
        alignItems="center"
        justifyContent="center"
        width={1}
        flexDirection="column"
      >
        <Link to="/terms-n-conditions">
          <motion.span
            whileHover={anim.linkHover}
            transition={anim.transition}
            style={{
              fontWeight: 'lighter'
            }}
          >
            {t('nav.tnc')}
          </motion.span>
        </Link>
        <Text as="p"
          fontWeight="light"
          color="#f5f5f5"
          letterSpacing="0.5px"
          fontSize={1}
          textAlign="center"
          mt={2}
        >
          Andler Develops © {new Date().getFullYear()}, ®{t('footer.copyright')}
        </Text>
      </Flex>
    </FooterContainer>
  )
}

export default Footer
