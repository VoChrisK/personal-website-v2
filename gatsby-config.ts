import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Chris Vo's Personal Website`,
    siteUrl: `https://chrisvo.dev/`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-scroll-reveal", 
    "gatsby-plugin-smoothscroll", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/images"
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `./src/assets/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'documents',
        path: `./src/assets/documents`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
  ]
};

export default config;
