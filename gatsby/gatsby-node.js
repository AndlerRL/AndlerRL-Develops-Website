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

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

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

exports.createPages = async ({ graphql, page, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(__dirname, `src/templates/project.js`)
  const res = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (res.errors) {
    throw res.errors
  }

  const projectData = res.data.allSanityProject.edges || []
  
  projectData.map((edge, index) => {
    return Object.keys(locales).map(lang => {
      const path = locales[lang].default 
        ? `/projects/${edge.node.slug.current}`
        : `${locales[lang].path}/projects/${edge.node.slug.current}`
  
      return createPage({
        path,
        component: projectTemplate,
        context: {
          slug: edge.node.slug.current,
          id: edge.node.id,
          locale: lang
        }
      })
    })
  })
}
