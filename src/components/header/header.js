/**
 * Header Component
 *
 * @description Renders the global site header.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { globalHistory as history } from '@reach/router';
import PropTypes from 'prop-types';
import Wrapper from '../wrapper/wrapper';
import style from './header.module.scss';

function Header({ id, isDark }) {
    /**
     * Get relevant site information from Gatsby site config.
     */
    const { site } = useStaticQuery(
        graphql`
            query siteHeader {
                site {
                    siteMetadata {
                        title
                        social {
                            email
                            github
                            linkedin
                        }
                    }
                }
            }
        `
    );

    /**
     * Get current path of the page and set title.
     */
    const { location } = history;
    let headerTitle;

    if (location.pathname === '/') {
        headerTitle = (
            <h1 className={style.globalHeader__title}>
                {site.siteMetadata.title}
            </h1>
        );
    }

    return (
        <header className={style.globalHeader} id={id}>
            <Wrapper>
                <div
                    className={`${style.globalHeader__inner} ${
                        isDark
                            ? style.globalHeader___dark
                            : style.globalHeader___light
                    }`}
                >
                    {headerTitle}
                    <div className={`${style.globalHeader__logo}`}>
                        <svg
                            id="logo"
                            role="img"
                            viewBox="0 0 1803.85 793.14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>JDA.</title>
                            <path
                                d="M65.5,654.9c38.88,0,63.93-30.24,63.93-85.54V38c0-16.42,6.91-22.46,23.33-22.46H257.3c16.42,0,22.46,6,22.46,22.46V579.73c0,137.37-58.75,213.4-194.4,213.4-28.51,0-51-1.73-66.53-6C2.43,782.77-1.89,775.86.7,758.58l9.5-84.67c.86-16.41,6-21.6,17.28-21.6C37,652.31,54.27,654.9,65.5,654.9Z"
                                className={style.pathMain}
                            />
                            <path
                                d="M614.13,15.55C824.08,15.55,945,131.32,945,311c0,188.35-127.87,309.3-345.59,309.3H401.59c-14.69,0-22.46-7.78-22.46-22.46V38c0-16.42,7.78-22.46,22.46-22.46ZM529.46,469.14c0,9.5,2.59,13,13,13h56.16c124.41,0,190.94-62.21,190.94-166.75,0-98.49-66.53-161.56-187.48-161.56H542.42c-10.37,0-13,3.46-13,13Z"
                                className={style.pathMain}
                            />
                            <path
                                d="M1059.09,620.34H953.69c-13,0-19-4.32-19-12.09,0-5.19,1.73-10.37,4.32-15.55L1214.61,44.06C1231,10.37,1240.53,0,1254.35,0s22.46,10.37,39.74,44.06l277.34,548.63c2.59,5.18,4.32,10.37,4.32,14.69,0,8.64-6.91,13-19.87,13H1445.29c-21.6,0-30.24-6-40.61-27.64L1251.76,278.2l-151.2,314.49C1090.19,614.29,1080.69,620.34,1059.09,620.34Z"
                                className={style.pathMain}
                            />
                            <path
                                d="M1803.85,554.68c0,43.2-33.7,76-82.94,76-48.38,0-83.81-32.83-83.81-76,0-44.93,35.42-77.76,83.81-77.76C1770.15,476.92,1803.85,509.75,1803.85,554.68Z"
                                className={style.pathAccent}
                            />
                        </svg>
                    </div>
                    <nav
                        className={`${style.globalHeader__nav}`}
                        role="navigation"
                    >
                        <ul className={style.navList}>
                            <li className={style.navItem}>
                                <a
                                    className={style.navLink}
                                    title={`@${site.siteMetadata.social.github} on Github`}
                                    href={`https://github.com/${site.siteMetadata.social.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        className={`${style.navLink__icon}`}
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>GitHub Logo</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                </a>
                            </li>
                            <li className={style.navItem}>
                                <a
                                    className={style.navLink}
                                    title={`Send mail to ${site.siteMetadata.social.email}`}
                                    href={`mailto:${site.siteMetadata.social.email}?subject=Hello! 👋 Let's Work Together.`}
                                >
                                    <svg
                                        role="img"
                                        className={`${style.navLink__icon}`}
                                        viewBox="0 0 479.058 479.058"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>Email Icon</title>
                                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Wrapper>
        </header>
    );
}

Header.defaultProps = {
    id: 'header',
    isDark: false,
};

Header.propTypes = {
    id: PropTypes.string,
    isDark: PropTypes.bool,
};

export default Header;
