require("dotenv").config();

const siteMetadata = {
  title: `Stephen Ajulu`,
  name: `Stephen Ajulu`,
  siteUrl: `https://stephenajulu.com`,
  description: `Product Designer who's learning to write and express thoughts. Currently, I'm building Design System and improving Web Experience at Carousell.`,
  hero: {
    heading: `Hi, I’m Stephen Ajulu, <br/>web developer, designer & content creator.`,
    writingHeading: `Thoughts and Writings.`,
    readingHeading: `Books`,
    littleGalleryHeading: `Little big grid`,
    littleGallerySubtitle: `Little works and experiments but my big pride. I pour them all in this grid.`,
    maxWidth: 776,
  },
  social: [
    {
      url: `https://twitter.com/trongawesome`,
    },
    {
      name: 'medium',
      url: `https://medium.com/@trongawesome`,
    },
    {
      name: 'instagram',
      url: `https://www.instagram.com/trongawesome`,
    },
  ],
};

const plugins = [
  {
    resolve: "@tantrongtt/gatsby-theme-trong",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      contentPortfolios: "content/portfolios",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Stephen Ajulu`,
      short_name: `Ajulu`,
      start_url: `/`,
      background_color: `#000000`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
      include_favicon: false,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "#",
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://medium.us16.list-manage.com/subscribe/post?u=bd56b6b313e273cdd466f5abc&amp;id=736a1779cd",
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @tantrongtt/gatsby-theme-trong/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @tantrongtt/gatsby-theme-trong
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
