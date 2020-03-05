import React from 'react'
import { Btn } from 'components/UI/btn'
import { Icon } from 'components/UI/icons'

const BackTo = () => {
  const backToTopHandler = () => {
    const { scroll } = window

    scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Btn onClick={backToTopHandler}>
      <Icon.arrowUpCircle
        size="64px"
        color="#f5f5f5"
      />
    </Btn>
    )
}

export default BackTo
