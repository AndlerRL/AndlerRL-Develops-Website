import React, { useEffect } from 'react'
import { Translate } from 'store'
import { Wrapper } from "components/UI/wrappers"

const ContactMe = ({ locale }) => {
  const { checkLang, t } = Translate.useContainer()

  useEffect(() => {
    checkLang(locale, 'contact-me')
  }, [])

  return (
    <Wrapper isMain >
      {t('test')}
    </Wrapper>
  )
}

export default ContactMe