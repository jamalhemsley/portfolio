/**
 * Wrapper Component
 *
 * @description Provides a size controlled container for site content.
 */

import React from 'react';
import PropTypes from 'prop-types';
import style from './wrapper.module.scss';

function Wrapper({ children }) {
    return <div className={style.wrapper}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
