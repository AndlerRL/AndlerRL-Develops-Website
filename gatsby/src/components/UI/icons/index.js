import React from 'react'
import { 
  FaLanguage,
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
  FaStackOverflow,
  FaFacebookF,
  FaWhatsapp,
  FiArrowUpCircle,
  FiNavigation2,
  FiSmartphone,
  FiAtSign,
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiX,
  FiLoader,
  IoIosQuote,
} from 'react-icons/all'
import { Flex } from 'rebass'
import { motion } from 'framer-motion'
import styled from 'util/styles'

const SocialLink = styled(motion.a)`
  filter: grayscale(75%);
  cursor: pointer;
`

export const Icon = {
  lang: props => <FaLanguage {...props} />,
  github: props => <FaGithubAlt {...props} />,
  linkedIn: props => <FaLinkedinIn {...props} />,
  twitter: props => <FaTwitter {...props} />,
  stackOverflow: props => <FaStackOverflow {...props} />,
  facebook: props => <FaFacebookF {...props} />,
  arrowUpCircle: props => <FiArrowUpCircle {...props} />,
  location: props => <FiNavigation2 {...props} />,
  phone: props => <FiSmartphone {...props} />,
  whatsapp: props => <FaWhatsapp {...props} />,
  at: props => <FiAtSign {...props} />,
  arrowLeft: props => <FiArrowLeft {...props} />,
  arrowRight: props => <FiArrowRight {...props} />,
  externalLink: props => <FiExternalLink {...props} />,
  close: props => <FiX {...props} />,
  load: props => <FiLoader {...props} />,
  quoteLeft: props => <IoIosQuote {...props} style={{ ...props.style, transform: 'scale(-1, -1)' }} />,
  quoteRight: props => <IoIosQuote {...props} />,
}

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

export const SocialIcons = ({ mb }) => (
  <Flex
    width={[10 / 12, 6 / 12, 1 / 2]}
    alignItems="center"
    justifyContent="space-around"
    my={4}
    mb={mb}
  >
    <SocialLink
      href="https://github.com/AndlerRL"
      target="__blank"
      transition={anim.transition}
      whileHover={anim.whileHover}
    >
      <Icon.github
        size="24px"
        color="#F4CBB2" 
      />
    </SocialLink>
    <SocialLink
      href="https://stackoverflow.com/users/9221863/m-lucas"
      target="__blank"
      transition={anim.transition}
      whileHover={anim.whileHover}
    >
      <Icon.stackOverflow
        size="24px"
        color="#F47F24" 
      />
    </SocialLink>
    <SocialLink
      href="https://linkedin.com/in/roberto-romero-lucas-147078138"
      target="__blank"
      transition={anim.transition}
      whileHover={anim.whileHover}
    >
      <Icon.linkedIn
        size="24px"
        color="#006192" 
      />
    </SocialLink>
    <SocialLink
      href="https://twitter.com/AndlerRL"
      target="__blank"
      transition={anim.transition}
      whileHover={anim.whileHover}
    >
      <Icon.twitter
        size="24px"
        color="#55ACEE" 
      />
    </SocialLink>
    <SocialLink
      href="https://fb.me/Megalife1294"
      target="__blank"
      transition={anim.transition}
      whileHover={anim.whileHover}
    >
      <Icon.facebook
        size="24px"
        color="#1778F2" 
      />
    </SocialLink>
  </Flex>
)