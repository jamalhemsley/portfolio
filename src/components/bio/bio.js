/**
 * Bio Component
 *
 * @description Displays information about the portfolio owner.
 */

import React from 'react';
import { Link } from 'gatsby';
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
                                    href="https://drive.google.com/open?id=1UYqUm5l9lpSswtI703OgfxF2-pZqmQ3k"
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
                            <p>
                                <strong>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur vitae ex eget
                                    libero pellentesque elementum. Integer non
                                    augue purus. Aenean non sodales velit.
                                </strong>
                            </p>
                            <p>
                                <a href="#footer">Suspendisse potenti.</a> Proin
                                sed urna vel ipsum faucibus tempus vel eget
                                orci. Nunc pellentesque sollicitudin neque, sit
                                amet fringilla nunc gravida at. Sed libero enim,
                                vestibulum nec libero facilisis, fermentum
                                congue sem. Morbi pellentesque{' '}
                                <a href="#contact">felis in nisl fermentum</a>,
                                eu egestas augue sodales. Phasellus venenatis
                                risus dolor, sed laoreet est efficitur in.
                            </p>
                            <p>
                                Integer rhoncus maximus tellus a pulvinar. Proin
                                vitae turpis sit amet risus feugiat pretium
                                varius vel mauris. Suspendisse in pretium nisi.{' '}
                                <a href="#contact">Cras ut tellus ac</a> orci
                                finibus congue eu sit amet augue. Donec molestie
                                justo nec rutrum fermentum.
                            </p>
                        </div>
                    </div>
                    <div className={`${style.bio__row}`}>
                        <h4 className={`${style.bio__title}`}>Skillset</h4>
                        <div className={`${style.bio__content}`}>
                            <h5>Design</h5>
                            <Skills skills={['sketch', 'photoshop']} />
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
