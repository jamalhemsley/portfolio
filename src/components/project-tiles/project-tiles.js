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
                                            maxWidth: 552
                                            quality: 75
                                            maxHeight: 425
                                            cropFocus: CENTER
                                        ) {
                                            ...GatsbyImageSharpFluid
                                            src
                                            srcSet
                                            srcSetWebp
                                        }
                                        id
                                    }
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

            return (
                <a
                    className={style.project}
                    id={project.id}
                    href={project.frontmatter.link}
                >
                    <div className={`${style.project__cover}`}>
                        <Img
                            className={`${style.project__image}`}
                            fluid={
                                project.frontmatter.previewImage.childImageSharp
                                    .fluid
                            }
                            alt={`${project.frontmatter.title} Preview`}
                        />
                        <div className={`${style.project__action}`}>
                            <span className={style.label}>
                                View the Project
                            </span>
                            <span className={style.icon}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 492.004 492.004"
                                >
                                    <path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z" />
                                </svg>
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
