/**
 * Banner Component
 *
 * @description Displays a content banner.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../wrapper/wrapper';
import style from './banner.module.scss';

function Banner({ id }) {
    return (
        <section className={`${style.banner} ${style.banner___header}`} id={id}>
            <Wrapper>
                <h2 className={`${style.banner__title}`}>
                    <span className={`${style.banner__titleStaticText}`}>
                        Producer
                    </span>
                    <span className={`${style.banner__titleMarkText}`}>
                        Creative
                    </span>
                </h2>
                <p className={`${style.banner__desc}`}>
                    I&rsquo;m Jamal Ali-Mohammed, a front-end developer crafting
                    engaging digital experiences.
                </p>
                <a className={`${style.banner__link}`} href="#footer">
                    Let&rsquo;s work together.
                </a>
            </Wrapper>
        </section>
    );
}

Banner.defaultProps = {
    id: '',
};

Banner.propTypes = {
    id: PropTypes.string,
};

export default Banner;
