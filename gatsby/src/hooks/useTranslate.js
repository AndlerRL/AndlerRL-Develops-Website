import { useReducer, useEffect, useState } from 'react'
import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import { navigate } from 'gatsby'

let initLang = null;

export const useLang = () => {
  const [lang, setLang] = useState(null)

  useEffect(() => {
    if (!initLang)
      initLang = localStorage.getItem('lang')
        ? localStorage.getItem('lang')
        : localStorage.setItem('lang', 'en')

    if (!lang)
      setLang(localStorage.getItem('lang')
        ? localStorage.getItem('lang')
        : localStorage.setItem('lang', 'en')
      )
  }, [setLang, initLang])

  return [lang, setLang]
}

const initState = {
  translations: {
    es: translateES,
    en: translateEN
  },
  current: null,
  lang: initLang
}

const reducer = (state, action) => {
  switch(action.type) {
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

export const useTranslate = (locale, page) => {
  const [data, dispatch] = useReducer(reducer, initState)
  const { translations, current } = data
  const newLang = translations[locale]
  const newCurrent = newLang[page]
  const [lang, setLang] = useLang()
  const [win, setWin] = useState(null)

  useEffect(() => {
    setWin(window)
    if (lang)
      setLang(localStorage.getItem('lang')
        ? localStorage.getItem('lang')
        : localStorage.setItem('lang', locale)
      )
  }, [])

  if (newCurrent !== current && lang) {
    dispatch({
      type: 'CHANGE_LANG',
      current: newCurrent,
      lang
    })
  }

  const t = t => {
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
  }

  const changeLang = () => {
    if (lang) {
      const newLang = lang === 'en' ? 'es' : 'en'
      const { location } = win
  
      setLang(localStorage.setItem('lang', newLang))
  
      dispatch({
        type: 'CHANGE_LANG',
        current: newCurrent,
        lang
      })
      
      if (lang !== 'en' && !location.pathname.match('/es/'))
        navigate(`/${lang}${location.pathname}`)
      else if (location.pathname.match('/es/') && lang === 'en')
        navigate(`/${(location.pathname).substr(3)}`)
    }
  }
  
  return {
    t,
    changeLang
  }
}

// export const Translate = createContainer(useTranslate)
