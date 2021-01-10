import React from 'react';
import PropTypes from 'prop-types';
import {
  GeneralText,
  ImageGrid,
  LargeText,
  StyleGuide,
  TextCards,
} from './slices';

const Content = ({ content, className }) => (
  <div>
    {content.map((section, index) => {
      const key = `section-${section.slice_type}-${index}`;

      switch (section.slice_type) {
        case 'general_text':
          return <GeneralText key={key} data={section} className={className} />;

        case 'image_grid':
          return <ImageGrid key={key} data={section} className={className} />;

        case 'large_text':
          return <LargeText key={key} data={section} className={className} />;

        case 'style_guide':
          return <StyleGuide key={key} data={section} className={className} />;

        case 'text_cards':
          return <TextCards key={key} data={section} className={className} />;

        default:
          return null;
      }
    })}
  </div>
);

Content.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({})),
  className: PropTypes.string,
};

Content.defaultProps = {
  content: [],
  className: '',
};

export default Content;
