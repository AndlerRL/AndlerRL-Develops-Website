import React from 'react'
import { Btn } from 'components/UI/btn'
import { Icon } from 'components/UI/icons'
import { useScrollCheck } from 'hooks/useScrollCheck'

const BackTo = () => {
  const { backToTop } = useScrollCheck()

  return (
    <Btn onClick={backToTop}>
      <Icon.arrowUpCircle
        size="64px"
        color="#f5f5f5"
      />
    </Btn>
    )
}

export default BackTo
