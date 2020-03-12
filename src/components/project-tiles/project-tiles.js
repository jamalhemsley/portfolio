/**
 * Project Tiles Component
 *
 * @description Displays the project section with project tiles.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Wrapper from '../wrapper/wrapper';
import style from './project-tiles.module.scss';

function ProjectTiles({ id }) {
    /**
     * Get projects from the `work` folder via GraphQL.
     *
     * Queries for six projects and sorts them by the year specified in the
     * project markdown.
     */
    const query = useStaticQuery(
        graphql`
            query projectQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: frontmatter___date }
                    limit: 6
                ) {
                    edges {
                        node {
                            frontmatter {
                                description
                                link
                                tags
                                title
                                previewImage {
                                    childImageSharp {
                                        fluid(
                                            maxWidth: 1104
                                            quality: 75
                                            maxHeight: 852
                                            cropFocus: CENTER
                                        ) {
                                            ...GatsbyImageSharpFluid
                                            src
                                            srcSet
                                            srcSetWebp
                                        }
                                        id
                                    }
                                    publicURL
                                }
                                previewVideo {
                                    publicURL
                                }
                            }
                            id
                        }
                    }
                }
            }
        `
    );

    // Store retrieved projects in variable.
    const projects = query.allMarkdownRemark.edges;

    /**
     * @function showProjects
     *
     * @description Sorts projects evenly into one of two columns for visual
     *              display.
     *
     * @param int The column number to sort projects into.
     *
     * @returns An array of projects rendered to the front-end view.
     */
    function showProjects(column = 1) {
        // Split retrieved projects into an array for it's respective column.
        const getProjects = projects.map(({ node }, index) => {
            const project = node;

            if ((index + column * 1) % 2 === 0) {
                return false;
            }

            // Attempt to get preview media for the projects.
            let projectMedia;
            const projectImage = project.frontmatter.previewImage
                ? project.frontmatter.previewImage
                : null;
            const projectImageSharp = projectImage
                ? project.frontmatter.previewImage.childImageSharp
                : null;
            const projectVideo = project.frontmatter.previewVideo
                ? project.frontmatter.previewVideo
                : null;

            if (!!projectImage && !!projectImageSharp) {
                // Use image sharp if preview image is compatible.
                projectMedia = (
                    <Img
                        className={`${style.project__media}`}
                        fluid={projectImageSharp.fluid}
                        alt={`${project.frontmatter.title} Preview`}
                    />
                );
            } else if (!!projectImage && !projectImageSharp) {
                // Use image tag is preview image unsupported by image sharp.
                projectMedia = (
                    <img
                        className={`${style.project__media}`}
                        src={projectImage.publicURL}
                        alt={`${project.frontmatter.title} Preview`}
                    />
                );
            } else if (projectVideo) {
                // Use video tag if project preview video was provided.
                projectMedia = (
                    <video
                        className={`${style.project__media} ${style.project__media___video}`}
                        autoPlay
                        playsInline
                        loop
                        muted
                    >
                        <source src={projectVideo.publicURL} type="video/mp4" />
                    </video>
                );
            }

            // Establish projectTags variable container.
            let projectTags;

            if (project.frontmatter.tags) {
                // Get the project tags and render each as a list element.
                const projectTagItems = project.frontmatter.tags.map(
                    (tag, i) => {
                        const key = i;

                        return (
                            <li className={style.tag} key={key}>
                                {tag}
                            </li>
                        );
                    }
                );

                // Enclose project tags in list element.
                projectTags = (
                    <ul className={`${style.project__tags}`}>
                        {projectTagItems}
                    </ul>
                );
            }

            return (
                <a
                    className={style.project}
                    id={`project-${project.id}`}
                    key={project.id}
                    href={project.frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div
                        className={`${
                            !!project.frontmatter.previewImage &&
                            !!project.frontmatter.previewImage.childImageSharp
                                ? style.project__cover
                                : `${style.project__cover} ${style.project__cover___video}`
                        }`}
                    >
                        {projectMedia}
                        <div className={`${style.project__action}`}>
                            <span className={style.label}>
                                View the Project
                            </span>
                        </div>
                    </div>
                    <div className={`${style.project__content}`}>
                        <h3 className={`${style.project__title}`}>
                            {project.frontmatter.title}
                        </h3>
                        <p className={`${style.project__desc}`}>
                            {project.frontmatter.description}
                        </p>
                        {projectTags}
                    </div>
                </a>
            );
        });

        return getProjects;
    }

    return (
        <section className={style.projectTiles} id={id}>
            <Wrapper>
                <div className={`${style.projectTiles__inner}`}>
                    <div className={`${style.projectTiles__column}`}>
                        {showProjects()}
                    </div>
                    <div className={`${style.projectTiles__column}`}>
                        {showProjects(2)}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

ProjectTiles.defaultProps = {
    id: 'projects',
};

ProjectTiles.propTypes = {
    id: PropTypes.string,
};

export default ProjectTiles;
