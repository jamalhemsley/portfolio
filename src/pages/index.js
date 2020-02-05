import React from 'react';
import SiteMeta from '../components/site-meta/site-meta';
import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import ProjectTiles from '../components/project-tiles/project-tiles';

const HomePage = () => (
    <div id="app">
        <SiteMeta title="Front-end Developer" />
        <Header />
        <main role="main">
            <Banner />
            <ProjectTiles />
        </main>
    </div>
);

export default HomePage;
