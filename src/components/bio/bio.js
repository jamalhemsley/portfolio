/**
 * Bio Component
 *
 * @description Displays information about the portfolio owner.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../wrapper/wrapper';
import style from './bio.module.scss';

function Bio({ id }) {
    return (
        <section className={style.bio} id={id}>
            <Wrapper>
                <div className={`${style.bio__inner}`}>
                    <div className={`${style.bio__row}`}>
                        <span className={`${style.bio__title}`}>Profile</span>
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
                                <a href="#contact">Suspendisse potenti.</a>{' '}
                                Proin sed urna vel ipsum faucibus tempus vel
                                eget orci. Nunc pellentesque sollicitudin neque,
                                sit amet fringilla nunc gravida at. Sed libero
                                enim, vestibulum nec libero facilisis, fermentum
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
                        <span className={`${style.bio__title}`}>Status</span>
                        <div className={`${style.bio__content}`}>
                            <p>
                                Sed libero enim, vestibulum nec libero
                                facilisis, fermentum congue sem. Morbi
                                pellentesque felis in nisl fermentum, eu egestas
                                augue sodales. Phasellus venenatis risus dolor,
                                sed laoreet est efficitur in.
                            </p>
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
