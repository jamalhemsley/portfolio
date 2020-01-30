module.exports = {
  siteMetadata: {
    title: `Jamal Ali-Mohammed &mdash; Front-end Developer`,
    description: `Digital experiences built by Jamal Ali-Mohammed.`,
    author: `@jdaio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        errorLogToConsole: true,
        outputStyle: 'compressed',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#FBFCFC`,
        theme_color: `#4272CB`,
        display: `minimal-ui`,
        icon: `src/images/digitalheat-icon.svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
