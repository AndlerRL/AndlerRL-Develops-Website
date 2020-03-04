/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require("fs-extra")
const path = require('path')
const locales = require('./src/util/locales')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        pages: path.resolve(__dirname, 'src/pages'),
        images: path.resolve(__dirname, 'src/images'),
        util: path.resolve(__dirname, 'src/util'),
        store: path.resolve(__dirname, 'src/store'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        context: path.resolve(__dirname, 'src/context'),
        locales: path.resolve(__dirname, 'src/locales'),
      },
    },
  })
}

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang
        }
      })
    })

    resolve()
  })
}