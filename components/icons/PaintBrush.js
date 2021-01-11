import React from 'react';
import PropTypes from 'prop-types';

const PaintBrushIcon = ({ height, id, width, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    height={height || null}
    width={width || null}
    className={className || null}
    role="img">
    <defs>
      <filter id="fill">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 0.956863 0 0 0 0 0.956863 0 0 0 0 0.964706 0 0 0 1.000000 0"
        />
      </filter>
    </defs>
    <g filter="url(#fill)" fill="none" fillRule="evenodd">
      <path
        d="M21.104 0c-.682 0-1.365.26-1.885.781l-5.024 5.024a1.22 1.22 0 001.724 1.724l1.805-1.805a1.332 1.332 0 111.885 1.883L19 8.219a1.024 1.024 0 101.448 1.448l-.057.057a1.332 1.332 0 011.885 0 1.332 1.332 0 010 1.885l.057-.057A1.024 1.024 0 1023.781 13l1.935-1.935a1.332 1.332 0 011.886 0 1.332 1.332 0 010 1.886l-3.13 3.13a1.22 1.22 0 001.723 1.724l5.024-5.024a2.666 2.666 0 000-3.77L22.989.78A2.658 2.658 0 0021.105 0zm-9.659 9.104c-.34 0-.68.13-.94.39l-3.057 3.058a2.666 2.666 0 000 3.77l1.411 1.415a1.934 1.934 0 010 2.734l-.205.209c-1.334 1.333-4.817 2.858-6.31 4.351C.11 27.265-.666 30.108.609 31.385c1.276 1.276 4.122.502 6.357-1.731 1.495-1.495 3.034-4.987 4.367-6.32l.196-.196a1.934 1.934 0 012.734 0l1.414 1.414a2.666 2.666 0 003.77 0l3.058-3.057a1.333 1.333 0 000-1.886L12.391 9.495c-.261-.26-.605-.39-.946-.39zM4 26.667a1.332 1.332 0 110 2.666 1.333 1.333 0 110-2.666z"
        fill="#535365"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

PaintBrushIcon.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

PaintBrushIcon.defaultProps = {
  className: '',
  height: null,
  width: null,
};

export default PaintBrushIcon;
