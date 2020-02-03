module.exports = {
    siteMetadata: {
        title: `Jamal Ali-Mohammed`,
        description: `Digital experiences built by Jamal Ali-Mohammed.`,
        author: `@jdaio`,
        social: {
            email: `jamal@digitalheat.co`,
            github: `jdaio`,
            instagram: `jamal.david`,
            linkedin: `jalimohammed`,
            twitter: `jamalxdavid`,
        },
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                data: `
                    @import '${__dirname}/src/assets/scss/variables';
                    @import '${__dirname}/src/assets/scss/mixins';
                `,
                errorLogToConsole: true,
                outputStyle: 'compressed',
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Portfolio`,
                short_name: `portfolio`,
                start_url: `/`,
                background_color: `#FBFCFC`,
                theme_color: `#4272CB`,
                display: `minimal-ui`,
                icon: `src/assets/images/digitalheat-icon.svg`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
    ],
};
