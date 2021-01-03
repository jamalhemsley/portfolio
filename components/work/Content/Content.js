import React from 'react';
import PropTypes from 'prop-types';
import { LargeText, StyleGuide, TextCards } from './slices';

export const Content = ({ content, className }) => (
  <div>
    {content.map((section, index) => {
      switch (section.slice_type) {
        case 'large_text':
          return (
            <LargeText
              key={`section-${index}`}
              data={section}
              className={className}
            />
          );

        case 'style_guide':
          return (
            <StyleGuide
              key={`section-${index}`}
              data={section}
              className={className}
            />
          );

        case 'text_cards':
          return (
            <TextCards
              key={`section-${index}`}
              data={section}
              className={className}
            />
          );

        default:
          return null;
      }
    })}
  </div>
);

Content.propTypes = {
  content: PropTypes.array,
  className: PropTypes.string,
};

export default Content;
