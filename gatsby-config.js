/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Reports`,
        path: `${__dirname}/src/assets/Reports/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Gatsby Project',
    description: 'This is the meta description',
    copyright: 'This website is copyright 2021 Gatsby Project',
    contact: 'test@test.com'
  },
}