import { useReducer, useCallback, useEffect } from 'react'

const initState = {
  headPos: {
    top: 0,
    bottom: 0,
  },
  subHeadPos: 64,
  menuPos: null,
  yOffset: 0,
  height: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_YOFFSET':
      return {
        ...state,
        yOffset: action.yOffset
      }
    case 'SET_HEIGHT':
      return {
        ...state,
        height: action.height
      }
    case 'CHECK_MENU_POS':
      return {
        ...state,
        menuPos: action.menuPos
      }
    case 'CHECK_HEAD_POS':
      return {
        ...state,
        headPos: action.headPos,
      }
    case 'CHECK_SUB_HEAD_POS':
      return {
        ...state,
        subHeadPos: action.subHeadPos,
      }
    default:
      throw new Error(`useScrollCheck couldn't dispatch any action.`)
  }
}

export const useScrollCheck = () => {
  const [data, dispatch] = useReducer(reducer, initState)
  const { headPos, subHeadPos, menuPos, yOffset, height } = data
  
  const checkMenuPos = useCallback(
    () => {
      if (menuPos) {
        const itemParent = menuPos.parentElement
        const itemPos = menuPos.getBoundingClientRect()
      
        itemParent.scroll({
          top: 0,
          left: itemPos.left,
          behavior: 'smooth'
        })
      }
    },
    [menuPos]
  )

  const checkHeadPos = useCallback(
    () => {
      const { scrollY, pageYOffset } = window;

      if (height !== scrollY)
        dispatch({
          type: 'SET_HEIGHT',
          height: scrollY
        })

      if (yOffset > pageYOffset) {
        dispatch({
          type: 'CHECK_HEAD_POS',
          headPos: {
            top: 0,
            bottom: -53
          }
        })
      } else {
        dispatch({
          type: 'CHECK_HEAD_POS',
          headPos: {
            top: -64,
            bottom: 0
          }
        })
      }

      dispatch({
        type: 'SET_YOFFSET',
        yOffset: pageYOffset
      })
    },
    [height, yOffset]
  )

  const checkSubMenuPos = useCallback(
    () => {
      const { scrollY, pageYOffset } = window

      if (height !== scrollY)
        dispatch({
          type: 'SET_HEIGHT',
          height: scrollY
        })

      if (yOffset > pageYOffset) {
        dispatch({
          type: 'CHECK_SUB_HEAD_POS',
          subHeadPos: 64
        })
      } else {
        dispatch({
          type: 'CHECK_SUB_HEAD_POS',
          subHeadPos: 0
        })
      }

      dispatch({
        type: 'SET_YOFFSET',
        yOffset: pageYOffset
      })
    },
    [height, yOffset]
  )

  useEffect(() => {
    const { scrollY, pageYOffset } = window;

    dispatch({
      type: 'SET_HEIGHT',
      height: scrollY
    })
    dispatch({
      type: 'SET_YOFFSET',
      yOffset: pageYOffset
    })
  }, [checkHeadPos])

  useEffect(() => {
    const { scrollY, pageYOffset } = window;
    const focus = document.querySelector('.is-current')
    
    if (focus !== menuPos)
      dispatch({
        type: 'CHECK_MENU_POS',
        menuPos: focus
      })

    dispatch({
      type: 'SET_HEIGHT',
      height: scrollY
    })
    dispatch({
      type: 'SET_YOFFSET',
      yOffset: pageYOffset
    })
  }, [checkSubMenuPos, menuPos])

  const backToTop = () => {
    const { scroll } = window

    scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return {
    checkSubMenuPos,
    checkHeadPos,
    backToTop,
    subHeadPos,
    headPos,
    height,
    checkMenuPos,
    menuPos,
  }
}
