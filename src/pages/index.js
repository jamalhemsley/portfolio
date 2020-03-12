/**
 * Index Page
 */

import React from 'react';
import SiteMeta from '../components/site-meta/site-meta';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Banner from '../components/banner/banner';
import ProjectTiles from '../components/project-tiles/project-tiles';
import Bio from '../components/bio/bio';

// Include polyfill for browsers without native smooth scrolling.
if (
    typeof window !== 'undefined' &&
    !CSS.supports('scroll-behavior', 'smooth')
) {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]', {
        speed: 400,
        easing: 'easeInOutCubic',
        updateURL: true,
        popstate: true,
    });
}

const HomePage = () => (
    <div id="app">
        <SiteMeta title="Front-end Developer" />
        <Header />
        <main role="main">
            <Banner id="home" />
            <ProjectTiles />
            <Bio id="about" />
        </main>
        <Footer />
    </div>
);

export default HomePage;
