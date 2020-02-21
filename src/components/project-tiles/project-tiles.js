/**
 * Project Tiles Component
 *
 * @description Displays the project section with project tiles.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Wrapper from '../wrapper/wrapper';
import style from './project-tiles.module.scss';

function ProjectTiles() {
    const query = useStaticQuery(
        graphql`
            query projectQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: frontmatter___year }
                    limit: 6
                ) {
                    edges {
                        node {
                            frontmatter {
                                description
                                link
                                tags
                                title
                                year
                                previewImage {
                                    childImageSharp {
                                        fluid(
                                            maxWidth: 1104
                                            quality: 100
                                            maxHeight: 850
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

    const projects = query.allMarkdownRemark.edges;

    function showProjects(column = 1) {
        const getProjects = projects.map(({ node }, index) => {
            const project = node;

            if ((index + column * 1) % 2 === 0) {
                return false;
            }

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
                projectMedia = (
                    <Img
                        className={`${style.project__media}`}
                        fluid={projectImageSharp.fluid}
                        alt={`${project.frontmatter.title} Preview`}
                    />
                );
            } else if (!!projectImage && !projectImageSharp) {
                projectMedia = (
                    <img
                        className={`${style.project__media}`}
                        src={projectImage.publicURL}
                        alt={`${project.frontmatter.title} Preview`}
                    />
                );
            } else if (projectVideo) {
                projectMedia = (
                    <video
                        className={`${style.project__media}`}
                        autoPlay
                        loop
                        muted
                    >
                        <source src={projectVideo.publicURL} type="video/mp4" />
                    </video>
                );
            }

            return (
                <a
                    className={style.project}
                    id={project.id}
                    href={project.frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div
                        className={`${
                            !!project.frontmatter.previewImage &&
                            !!project.frontmatter.previewImage.childImageSharp
                                ? style.project__cover
                                : `${style.project__cover} ${style.project__cover___alt}`
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
                        <ul className={`${style.project__tags}`}>
                            {project.frontmatter.tags.map(tag => (
                                <li className={style.tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </a>
            );
        });

        return getProjects;
    }

    return (
        <section className={style.projectTiles}>
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

export default ProjectTiles;
