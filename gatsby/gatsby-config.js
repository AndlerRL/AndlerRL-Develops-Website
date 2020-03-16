require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}` || `.env`
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://andler.netlify.com`,
    title: `Andler Develops`,
    description: {
      es: `Desarrollador web de alta gama, preparado para utilizar las últimas tecnologías en el mercado, lleno de creatividad y aspiraciones.`,
      en: `High-end web developer, prepared to use the latest technologies on the market, full of creativity and aspirations.`
    },
    manifest: {
      backgroundColor: `#010101`,
      themeColor: `#212121`,
    },
    keywords: `andler, dev, develops, devs, full-stack, developer, desarrollador, fullstack, portfolio, portafolio, freelance, freelancer`,
    googleAnalyticsId: `UA-140783181-1`,
    schema: {
      '@type': `Person`,
      author: `Roberto Romero Lucas`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
          `Montserrat\:300,300i,400,400i,500,500i,600`,
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
