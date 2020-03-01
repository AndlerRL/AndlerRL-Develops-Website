/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const { renderToString } = require("react-dom/server")
const i18n = require("./src/util/i18n")

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.loadNamespaces(["common"], () => {
    replaceBodyHTMLString(bodyComponent)
  })
}