module.exports = {
    siteMetadata: {
        title: `Jamal Ali-Mohammed`,
        description: `Digital experiences built by Jamal Ali-Mohammed.`,
        author: `@jdaio`,
        social: {
            email: `jamal@digitalhe.at`,
            github: `jdaio`,
        },
        source: {
            provider: `Github`,
            url: `https://github.com/jdaio/portfolio/`,
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
                name: `work`,
                path: `${__dirname}/src/work/`,
            },
        },
        `gatsby-transformer-remark`,
    ],
};
