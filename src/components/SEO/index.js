import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import logo from '../../assets/images/thumbnail.jpg';

const SEO = ({ pageView, modalView }) => {
  useEffect(() => {
    ReactGA.initialize('UA-140783181-1', {
      debug: false,
      titleCase: true
    });
    pageView && ReactGA.pageview(pageView || '/');
    modalView && ReactGA.modalview(modalView);
    ReactGA.set({
      userId: 121294,
      dimension14: pageView ? 'Visiting' : 'Watching Projects'
    })
  }, []);

  const meta = {
    siteUrl: `https://andler.netlify.com`,
    siteTitle: `Andler Develops`,
    siteTitleAlt: `High-end developer you may find.`,
    siteTitleShort: `Andler Devs`,
    siteDescription: `High-end developer, designed to use the latest technologies on the market with tons of creativity and aspirations.`,
    manifest: {
      themeColor: `#222`,
      backgroundColor: `#111`,
    },
    keywords: ``,
    googleAnalyticsId: `UA-XXXXX`,
    facebook: `Your optional Facebook App ID`,
    twitter: `Your Twitter username`,
    schema: {
      '@type': `Person`,
      author: `Roberto Lucas`,
    },
  }

  const schemaOrg = [
    {
      '@context': `http://schema.org`,
      '@type': `WebSite`,
      url: meta.siteUrl,
      name: meta.siteTitle,
      description: meta.siteDescription,
      alternateName: meta.siteTitleAlt ? meta.siteTitleAlt : '',
      author: {
        '@type': `Person`,
        name: meta.schema.author,
      },
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en_GB'
      }}
      title={meta.siteTitle}
      titleTemplate={`${meta.siteTitle}`}
      meta={[
        {
          name: 'description',
          content: meta.siteDescription,
        },
        {
          property: 'og:title',
          content: meta.siteTitle
        },
        {
          property: 'og:description',
          content: meta.siteDescription,
        },
        {
          property: 'og:type',
          content: 'website', 
        },
        {
          property: 'og:url',
          content: meta.siteUrl,
        },
        {
          property: 'og:image',
          content: logo
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
          content: 'Andler Develops Logo'
        },
        {
          name: 'keywords',
          content: 'andlerrl develops,andlerrl dev,andlerrl, full-stack developer,fullstack developer,portfolio,web portfolio,freelance developer,andler devs,andler develops,andler,andler web'
        },
        {
          name: 'google-site-verification',
          content: '6c3Ga1g7xk1avVIXbJ_vdJjlp7UDuhiFxSmTjrJjPzw'
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
    </Helmet>
  );
} 

export default SEO;
