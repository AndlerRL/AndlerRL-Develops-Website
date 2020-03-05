require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}` || `.env`
})

module.exports = {
  siteMetadata: {
    title: `Andler Develops`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `AndlerRL`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Kalam\:700`,
          `Montserrat\:300,400,500,600`,
          `Oswald\:400,500,600,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andler Develops`,
        short_name: `Andler Devs`,
        start_url: `/`,
        background_color: `#010101`,
        theme_color: `#232323`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: `production`,
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_READ_TOKEN
      }
    }
  ],
}
