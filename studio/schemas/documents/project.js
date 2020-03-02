function localize(value, languages) {
  if (Array.isArray(value)) {
    return value.map(v => localize(v, languages))
  } else if (typeof value == 'object') {
    if (/^locale[A-Z]/.test(value._type)) {
      const language = languages.find(lang => value[lang])
      return value[language]
    }
    
    return Object.keys(value).reduce((result, key) => {
      result[key] = localize(value[key], languages)
      return result
    }, {})
  }
  return value
}

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'techs',
      title: 'Techs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tech'}}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlock',
    }
  ]
}
