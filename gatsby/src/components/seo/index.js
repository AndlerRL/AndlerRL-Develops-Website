/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import ReactGA from "react-ga"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, pageView, thumbnail }) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description {
              es
              en
            }
            schema {
              author
            }
            keywords
            googleAnalyticsId
            siteUrl
          }
        }
        file(name: {eq: "thumbnail"}) {
          publicURL
          name
        }
      }
    `
  )

  useEffect(() => {
    ReactGA.initialize(site.siteMetadata.googleAnalyticsId, {
      debug: false,
      titleCase: false
    });
    pageView && ReactGA.pageview(pageView);
    ReactGA.set({
      userId: 211326695,
      dimension14: pageView !== `${lang === 'es' ? '/es/' : '/'}projects/${title}` ? 'Visiting' : 'Watching Projects'
    })
  });

  const metaDescription = description || site.siteMetadata.description[lang]
  const metaThumbnail = file.publicURL

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:url',
          content: site.siteMetadata.siteUrl,
        },
        {
          property: 'og:image',
          content: metaThumbnail
        },
        {
          property: 'og:image:type',
          content: 'image/jpeg'
        },
        {
          property: 'og:image:width',
          content: '415'
        },
        {
          property: 'og:image:height',
          content: '415'
        },
        {
          property: 'og:image:alt',
          content: title
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'twitter:type',
          content: 'website', 
        },
        {
          property: 'twitter:url',
          content: site.siteMetadata.siteUrl,
        },
        {
          property: 'twitter:image',
          content: metaThumbnail
        },
        {
          property: 'twitter:image:type',
          content: 'image/jpeg'
        },
        {
          property: 'twitter:image:width',
          content: '415'
        },
        {
          property: 'twitter:image:height',
          content: '415'
        },
        {
          property: 'twitter:image:alt',
          content: title
        },
        {
          name: 'google-site-verification',
          content: '6c3Ga1g7xk1avVIXbJ_vdJjlp7UDuhiFxSmTjrJjPzw'
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
