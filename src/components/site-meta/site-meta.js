/**
 * Site Meta Component
 *
 * @description Queries for data with Gatsby's useStaticQuery React hook to
 *              provide meta data for the HTML head.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function SiteMeta({ description, lang, meta, title }) {
    /**
     * Get site information via GraphQL from Gatsby site config.
     */
    const { site } = useStaticQuery(
        graphql`
            query siteMeta {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const siteMetaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    content: siteMetaDescription,
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: siteMetaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    name: 'twitter:description',
                    content: siteMetaDescription,
                },
            ].concat(meta)}
        />
    );
}

SiteMeta.defaultProps = {
    lang: 'en',
    meta: [],
    description: '',
};

SiteMeta.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SiteMeta;
