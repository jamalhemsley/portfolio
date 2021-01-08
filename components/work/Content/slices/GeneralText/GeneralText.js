import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';

const GeneralText = ({ data, className }) => {
  const { heading, content } = data.primary;

  if (data) {
    return (
      <section className={className}>
        <div className="container">
          <div className="row">
            {heading.length > 0 ? (
              <div className="col-14 offset-1 col-lg-5 col-xxl-4">
                <h2 className="h3">{renderText(heading, true)}</h2>
              </div>
            ) : null}

            <div
              className={
                heading.length > 0 && content
                  ? 'col-14 offset-1 col-lg-8 col-xxl-9'
                  : 'col-14 offset-1 col-lg-12 offset-lg-2 col-xl-10 offset-xl-3'
              }>
              {renderText(content)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

GeneralText.propTypes = {
  data: PropTypes.shape({
    primary: PropTypes.shape({
      heading: PropTypes.arrayOf(PropTypes.shape({})),
      content: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
  className: PropTypes.string,
};

GeneralText.defaultProps = {
  data: {},
  className: '',
};

export default GeneralText;
