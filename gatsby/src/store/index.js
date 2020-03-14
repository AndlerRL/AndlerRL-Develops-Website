import { useReducer, useEffect, useState, useCallback } from 'react'
import { createContainer } from 'unstated-next'
import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import { navigate } from 'gatsby'

const initState = {
  translations: {
    es: translateES,
    en: translateEN
  },
  current: null,
  lang: 'en'
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_LANG': 
      return {
        ...state,
        current: action.current,
        lang: action.lang
      }
    case 'CHANGE_LANG': 
      return {
        ...state,
        current: action.current,
        lang: action.lang
      }
    default:
      throw new Error(`You shouldn't be here... `)
  }
}

const useTranslate = () => {
  const [data, dispatch] = useReducer(reducer, initState)
  const { translations, current, lang, page } = data
  const [win, setWin] = useState(null)

  useEffect(() => {
    setWin(window)

    return () => {
      setWin(window)
    }
  }, [])
  
  const checkPath = locale => {
    if (win && lang !== locale) {
      const { location } = win
      const l = lang !== 'en' && !location.pathname.match('/es/') 
        ? lang 
        : ''
      const to = location.pathname.match('/es/') && lang === 'en' 
        ? (location.pathname).substr(3) 
        : location.pathname
      navigate(
        `/${l}${to}`
      )
    }
  }

  const checkLang = useCallback((locale, p) => {
    const newLang = translations[locale]
    const newCurrent = newLang[p]

    dispatch({
      type: 'SET_LANG',
      current: newCurrent,
      lang: localStorage.getItem('lang')
        ? localStorage.getItem('lang')
        : localStorage.setItem('lang', locale)
    })

    return checkPath(locale)
  }, [checkPath])

  const t = useCallback(t => {
    const tIndex = t.indexOf('.')

    if (current)
      if (tIndex !== -1) {
        const tSplit = t.split('.')
        let tCurrent = current[tSplit[0]]
        tCurrent = tCurrent[tSplit[1]]

        if (tSplit.length > 2) {
          tCurrent = tCurrent[tSplit[2]]

          if (tSplit.length > 3) {
            tCurrent = tCurrent[tSplit[3]]

            if (tSplit.length > 4)
              tCurrent = tCurrent[tSplit[4]]
          }
        }

        return tCurrent
      } else
        return current[t]
  }, [current])

  const changeLang = locale => {
    const newLang = lang === 'en' ? 'es' : 'en'
    const newL = translations[locale]
    const newCurrent = newL[page]
    
    localStorage.setItem('lang', newLang)

    dispatch({
      type: 'CHANGE_LANG',
      current: newCurrent,
      lang: newLang,
    })

    const { location } = win
    const l = lang !== 'en' && !location.pathname.match('/es/') 
      ? lang 
      : ''
    const to = location.pathname.match('/es/') && lang === 'en' 
      ? (location.pathname).substr(3) 
      : location.pathname

    navigate(
      `/${l}${to}`
    )
  }
  
  return {
    t,
    changeLang,
    lang,
    checkPath,
    checkLang
  }
}

export const Translate = createContainer(useTranslate)