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
                                As a freelancer since 2013, I&rsquo;ve worked
                                with a variety of clients and creative agencies.
                                At the moment, I collaborate primarily
                                with&nbsp;
                                <a
                                    href="https://hubandspokecreative.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hub &amp; Spoke Creative
                                </a>
                                &nbsp;to create digital experiences that
                                effectively connect with their audiences. While
                                I&rsquo;m primarily a front-end developer, in
                                the past I&rsquo;ve worked with companies and
                                organizations such as&nbsp;
                                <a
                                    href="https://www.properchannel.co/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Proper Channel
                                </a>
                                &nbsp;and&nbsp;
                                <a
                                    href="https://technole.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Technole
                                </a>
                                &nbsp;in public relations, marketing and
                                technical writing capacities.
                            </p>
                            <p>
                                When I&rsquo;m not in a code editor, I typically
                                spend time working on my writing, filming,
                                catching up on some of&nbsp;
                                <a
                                    href="https://trakt.tv/users/jamalxdavid"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    my most watched shows
                                </a>
                                , and seeing what&rsquo;s new on my&nbsp;
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
                                    Interested in working together?&nbsp;
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
