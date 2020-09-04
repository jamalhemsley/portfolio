/**
 * Bio Component
 *
 * @description Displays information about the portfolio owner.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../wrapper/wrapper';
import Skills from '../skills/skills';
import style from './bio.module.scss';

function Bio({ id }) {
    return (
        <section className={style.bio} id={id}>
            <Wrapper>
                <div className={`${style.bio__inner}`}>
                    <div className={`${style.bio__row}`}>
                        <h4 className={`${style.bio__title}`}>Résumé</h4>
                        <div className={`${style.bio__content}`}>
                            <p>
                                <a
                                    href="https://drive.google.com/open?id=1JRQABqvOONqYx-MQnxYHwbkjEUYea7gT"
                                    title="View My Resume"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <strong>resume.pdf</strong>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className={`${style.bio__row}`}>
                        <h4 className={`${style.bio__title}`}>Profile</h4>
                        <div className={`${style.bio__content}`}>
                            <p className="lead">
                                I&rsquo;m a front-end developer specializing in
                                crafting engaging digital experiences for web
                                and mobile applications.
                            </p>
                            <p>
                                I&rsquo;m passionate about turning great ideas
                                into exciting, functional, accessible digital
                                products. With seven years of experience in the
                                industry, I&rsquo;ve built various products for
                                individuals and organizations ranging from
                                simple, highly converting marketing landing
                                pages to mid-sized Node.js web applications.
                            </p>
                            <p>
                                While as a freelancer I&rsquo;ve worked with a
                                wide variety of clients and creative agencies,
                                at the moment I&rsquo;m currently working as a
                                front-end developer at{' '}
                                <a
                                    href="https://www.patronage.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Patronage
                                </a>
                                .
                            </p>
                            <p>
                                When I&rsquo;m not in a code editor, I typically
                                spend time working on my writing, filming,
                                catching up on some of{' '}
                                <a
                                    href="https://trakt.tv/users/jamalxdavid"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    my most watched shows
                                </a>
                                , and seeing what&rsquo;s new on my{' '}
                                <a
                                    href="https://www.youtube.com/channel/UCsqjHFMB_JYTaEnf_vmTNqg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    favorite YouTube channel
                                </a>
                                .
                            </p>
                            <p>
                                <a href="#footer">
                                    Interested in working together?{' '}
                                    <strong>Let&rsquo;s connect.</strong>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className={`${style.bio__row}`}>
                        <h4 className={`${style.bio__title}`}>Skillset</h4>
                        <div className={`${style.bio__content}`}>
                            <h5>Design</h5>
                            <Skills skills={['sketch', 'xd', 'photoshop']} />
                            <h5>Code</h5>
                            <Skills
                                skills={[
                                    'html',
                                    'css',
                                    'sass',
                                    'js',
                                    'react',
                                    'node',
                                    'php',
                                    'wordpress',
                                ]}
                            />
                            <h5>Tools</h5>
                            <Skills skills={['git', 'gulp', 'webpack']} />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

Bio.defaultProps = {
    id: '',
};

Bio.propTypes = {
    id: PropTypes.string,
};

export default Bio;
