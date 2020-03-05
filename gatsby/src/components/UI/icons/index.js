import React from 'react'
import { 
  FaLanguage,
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
  FaStackOverflow,
  FaFacebookF,
  FiArrowUpCircle,
} from 'react-icons/all'


export const Icon = {
  lang: props => <FaLanguage {...props} />,
  github: props => <FaGithubAlt {...props} />,
  linkedIn: props => <FaLinkedinIn {...props} />,
  twitter: props => <FaTwitter {...props} />,
  stackOverflow: props => <FaStackOverflow {...props} />,
  facebook: props => <FaFacebookF {...props} />,
  arrowUpCircle: props => <FiArrowUpCircle {...props} />,
}