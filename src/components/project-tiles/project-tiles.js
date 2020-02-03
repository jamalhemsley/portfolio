/**
 * Project Tiles Component
 *
 * @description Displays the project section with project tiles.
 */

import React from 'react';
import style from './project-tiles.module.scss';
import Wrapper from '../wrapper/wrapper';

import digitalHeat from '../../assets/images/digital-heat.jpg';
import kearneyPoint from '../../assets/images/kearney-point.jpg';
import seagramsGin from '../../assets/images/seagrams-gin.jpg';
import sweetGreen from '../../assets/images/sweetgreen.gif';

const projectColors = {
    background: 'linear-gradient(60deg, #455C72, #4272CB)',
};

function ProjectTiles() {
    return (
        <section className={style.projectTiles}>
            <Wrapper>
                <div className={`${style.projectTiles__inner}`}>
                    <div className={`${style.projectTiles__column}`}>
                        <a
                            className={style.project}
                            href="https://digitalheat.co/"
                        >
                            <div className={`${style.project__cover}`}>
                                <img
                                    className={`${style.project__image}`}
                                    src={digitalHeat}
                                    alt="Digital Heat Project Cover"
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
                                <h3 className={`${style.project__client}`}>
                                    Digital Heat
                                </h3>
                                <div className={`${style.project__desc}`}>
                                    Employing creative online branding
                                    strategies to establish a big presence.
                                </div>
                            </div>
                        </a>
                        <a
                            className={style.project}
                            href="https://digitalheat.co/"
                        >
                            <div className={`${style.project__cover}`}>
                                <img
                                    className={`${style.project__image}`}
                                    src={seagramsGin}
                                    alt="Digital Heat Project Cover"
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
                                <h3 className={`${style.project__client}`}>
                                    Seagram&rsquo;s Gin
                                </h3>
                                <div className={`${style.project__desc}`}>
                                    Leveraging history and tradition to show the
                                    public that we can always bring real to the
                                    table.
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={`${style.projectTiles__column}`}>
                        <a
                            className={style.project}
                            href="https://digitalheat.co/"
                        >
                            <div className={`${style.project__cover}`}>
                                <img
                                    className={`${style.project__image}`}
                                    src={kearneyPoint}
                                    alt="Digital Heat Project Cover"
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
                                <h3 className={`${style.project__client}`}>
                                    Kearney Point
                                </h3>
                                <div className={`${style.project__desc}`}>
                                    Embracing a Garden State of Mind.
                                </div>
                            </div>
                        </a>
                        <a
                            className={style.project}
                            href="https://digitalheat.co/"
                        >
                            <div className={`${style.project__cover}`}>
                                <img
                                    className={`${style.project__image}`}
                                    src={sweetGreen}
                                    alt="Digital Heat Project Cover"
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
                                <h3 className={`${style.project__client}`}>
                                    Sweetgreen
                                </h3>
                                <div className={`${style.project__desc}`}>
                                    Artificial intelligence-powered meal plans
                                    delivered straight to your door.
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
export default ProjectTiles;
