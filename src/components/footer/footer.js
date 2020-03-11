/**
 * Footer Component
 *
 * @description Renders the global site footer.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Wrapper from '../wrapper/wrapper';
import style from './footer.module.scss';
import packageInfo from '../../../package.json';

function Footer({ id }) {
    /**
     * Get the site title and email address from Gatsby site config.
     */
    const { site } = useStaticQuery(
        graphql`
            query siteFooter {
                site {
                    siteMetadata {
                        title
                        social {
                            email
                        }
                    }
                }
            }
        `
    );

    return (
        <footer className={style.globalFooter} id={id}>
            <Wrapper>
                <div className={`${style.globalFooter__upper}`}>
                    <div className={`${style.globalFooter__title}`}>
                        Let&rsquo;s Talk
                        <span
                            className={`${style.globalFooter__titleHighlight}`}
                        >
                            .
                        </span>
                        <span
                            className={`${style.globalFooter__titleIcon}`}
                            role="img"
                            aria-label="wave"
                        >
                            👋
                        </span>
                    </div>
                    <div className={`${style.globalFooter__content}`}>
                        <p>
                            Interested in working together? I&rsquo;m currently
                            accepting new projects and can be reached at&nbsp;
                            <a
                                href={`mailto:${site.siteMetadata.social.email}?subject=Hello! 👋 Let's Work Together.`}
                                title={`Shoot me an email at ${site.siteMetadata.social.email}.`}
                            >
                                {site.siteMetadata.social.email}
                            </a>
                            .
                        </p>
                    </div>
                </div>
                <div className={`${style.globalFooter__lower}`}>
                    <p className={`${style.globalFooter__copyright}`}>
                        &copy;
                        {` ${new Date().getFullYear()} `}
                        {site.siteMetadata.title}
                    </p>
                    <a
                        className={`${style.globalFooter__sourceLink}`}
                        href={packageInfo.homepage}
                        title="View this site&rsquo;s source on Github"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span
                            className={`${style.globalFooter__sourceLinkText}`}
                        >
                            Source on Github
                        </span>
                        <span
                            className={`${style.globalFooter__sourceLinkIcon}`}
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>GitHub</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </span>
                    </a>
                </div>
            </Wrapper>
        </footer>
    );
}

Footer.defaultProps = {
    id: 'footer',
};

Footer.propTypes = {
    id: PropTypes.string,
};

export default Footer;
