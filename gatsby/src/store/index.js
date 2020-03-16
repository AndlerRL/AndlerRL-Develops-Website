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
  lang: null,
  page: ''
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'READ_LANG': 
      return {
        ...state,
        lang: action.lang
      }
    case 'SET_LANG': 
      return {
        ...state,
        current: action.current,
        lang: action.lang,
        page: action.page
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
    const { language } = navigator
    const localLang = localStorage.getItem('lang')
    const navLang = !language.match('es') ? 'en' : 'es'

    dispatch({
      type: 'READ_LANG',
      lang: localLang || navLang
    })

    setWin(window)

    return () => {
      setWin(window)
    }
  }, [lang, setWin])
  
  const checkPath = useCallback(locale => {
    if (lang) {
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
  }, [lang, win])

  /**
   * 
   * TODO:
   * 
   * Necesito verificar el BUG que está ocurriendo cuando un usuario nuevo
   * visita la página, ya que al parecer no almacena bien el idioma desde
   * que cree el Dispatch de 'READ_LANG' y está causando problemas de
   * actualización.
   * 
   * Tengo que:
   *    1. Verificar function changeLang()
   *    2. Verificar function checkLang()
   *    3. Arreglar los problemas de actualización de cada function() 
   * 
   * Acaso tendré que agregar el dependency de cada useEffect() que 
   * checkLang() tiene ???
   * 
   * 
   */

  const checkLang = useCallback(p => {
    if (lang) {
      const localLang = localStorage.getItem('lang');
      const newLang = translations[localLang || lang]
      const newCurrent = newLang[p]
  
      dispatch({
        type: 'SET_LANG',
        current: newCurrent,
        page: p,
        lang: localLang || lang
      })
  
      return checkPath(lang)
    }
  }, [checkPath, translations, lang])

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
    const newLang = locale === 'en' ? 'es' : 'en'
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