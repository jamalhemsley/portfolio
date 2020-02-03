/**
 * Banner Component
 *
 * @description Displays a content banner.
 */

import React from 'react';
import style from './banner.module.scss';
import Wrapper from '../wrapper/wrapper';

function Banner() {
    return (
        <section className={`${style.banner} ${style.banner___header}`}>
            <Wrapper>
                <h2 className={`${style.banner__title}`}>
                    Producer
                    <span className={`${style.banner__mark}`}> &times; </span>
                    Creative
                </h2>
                <div className={`${style.banner__desc}`}>
                    <p>
                        Designing, crafting, and shooting the work that people
                        want to spend time with.
                    </p>
                </div>
                <a href="#contact" className={`${style.banner__link}`}>
                    Let&rsquo;s work together.
                </a>
            </Wrapper>
        </section>
    );
}

export default Banner;
