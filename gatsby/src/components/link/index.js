import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'util/styles'

const LinkContainer = styled(Link)`
  color: #f5f5f5;
  transition: color 0.15s cubic-bezier(0.785, 0.135, 0.15, 0.86) 50ms;

  &:hover,
  &:active {
    color: #bdbdbd;
  }
`

const LinkComponent = ({ to, children }) => {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const currentLang = localStorage.getItem('lang')
      ? localStorage.getItem('lang')
      : localStorage.setItem('lang', 'en')

    if (lang !== currentLang)
      setLang(currentLang)
  }, [setLang])

  return (
    <LinkContainer
      to={lang !== 'en' ? `/${lang}${to}` : to}
      activeStyle={{
        color: '#bdbdbd'
      }}
    >
      { children }
    </LinkContainer>
  )
}

export default LinkComponent