/**
 * Banner Component
 *
 * @description Displays a content banner.
 */

import React from 'react';
import Wrapper from '../wrapper/wrapper';
import style from './banner.module.scss';

function Banner() {
    return (
        <section className={`${style.banner} ${style.banner___header}`}>
            <Wrapper>
                <h2 className={`${style.banner__title}`}>
                    <span className={`${style.banner__staticText}`}>
                        Producer
                    </span>
                    <span className={`${style.banner__markText}`}>
                        Creative
                    </span>
                </h2>
                <p className={`${style.banner__desc}`}>
                    Designing, crafting, and shooting the work that people want
                    to spend time with.
                </p>
                <a className={`${style.banner__link}`} href="#footer">
                    Let&rsquo;s work together.
                </a>
            </Wrapper>
        </section>
    );
}

export default Banner;
