import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';

const ExternalLinkIcon = ({ title, height, width, className, type }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    height={height || null}
    width={width || null}
    className={className || null}
    aria-labelledby="iconExternalLinkTitleId"
    role="img">
    {title && (
      <title id="iconExternalLinkTitleId">{renderText(title, true)}</title>
    )}

    <defs>
      <linearGradient
        x1="7.07%"
        y1="-25.903%"
        x2="76.582%"
        y2="125.987%"
        id="gradient">
        <stop stopColor="#4272CB" offset="0%" />
        <stop stopColor="#E54F6D" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M12.822.578a.583.583 0 00-.065.005H9.333a.583.583 0 100 1.167h2.092L5.421 7.754a.583.583 0 10.825.825l6.004-6.004v2.092a.583.583 0 101.167 0V1.24a.583.583 0 00-.595-.663zM1.167 2.917C.529 2.917 0 3.446 0 4.083v8.75C0 13.471.529 14 1.167 14h8.75c.637 0 1.166-.529 1.166-1.167V5.496L9.917 6.663v6.17h-8.75v-8.75h6.17l1.167-1.166H1.167z"
      fill={type !== 'gradient' ? '#3565C0' : 'url(#gradient)'}
      fillRule="nonzero"
    />
  </svg>
);

ExternalLinkIcon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.number,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  width: PropTypes.number,
};

ExternalLinkIcon.defaultProps = {
  className: '',
  height: null,
  type: '',
  title: '',
  width: null,
};

export default ExternalLinkIcon;
