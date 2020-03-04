import { useReducer, useCallback } from 'react'
import translateES from 'locales/es.json'
import translateEN from 'locales/en.json'
import { navigate } from 'gatsby'

const lang = localStorage.getItem('lang')
? localStorage.getItem('lang')
: localStorage.setItem('lang', 'en')

const initState = {
  translations: {
    es: translateES,
    en: translateEN
  },
  current: {},
  lang
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
  let lang = localStorage.getItem('lang')
    ? localStorage.getItem('lang')
    : localStorage.setItem('lang', locale)

  if (newCurrent !== current) {
    dispatch({
      type: 'CHANGE_LANG',
      current: newCurrent,
      lang
    })
  }

  const t = translate => current[translate]

  const changeLang = location => {
    console.log(lang)
    const newLang = lang === 'en' ? 'es' : 'en'
    lang = localStorage.setItem('lang', newLang)

    dispatch({
      type: 'CHANGE_LANG',
      current: newCurrent,
      lang
    })
  }
  
  return {
    t,
    changeLang
  }
}

// export const Translate = createContainer(useTranslate)
