import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderDate, renderText } from 'utils/content';
import { Button } from 'components/common';
import Image from './Image/Image';

// import styles from './Header.module.scss';

const Header = ({ client, date, title, tagline, image }) => {
  const {
    xs: { url: underlayImageUrl },
  } = image;

  return (
    <header className="WorkHeader">
      <div className="container">
        <div className="row">
          <div className="col-14 offset-1">
            {client || date ? (
              <div className="WorkHeader__meta">
                {client && (
                  <span className="h3 WorkHeader__client">
                    {renderText(client, true)}
                  </span>
                )}
                {date && (
                  <span className="h3 WorkHeader__date">
                    {renderDate(date)}
                  </span>
                )}
              </div>
            ) : null}

            {title && (
              <h1 className="WorkHeader__title">{renderText(title, true)}</h1>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-13 col-sm-12 col-md-11 offset-1 col-lg-10 col-xl-11 col-xxl-10">
            {tagline && (
              <p className="lead-lg WorkHeader__tagline">
                {renderText(tagline, true)}
              </p>
            )}
          </div>
          <div className="col-14 offset-1 col-lg-4 offset-lg-0 col-xl-3 offset-xxl-1 d-lg-flex justify-content-lg-end align-items-lg-end">
            <Button
              className="WorkHeader__skipLink"
              label="View Case"
              link="#overview"
              icon={<FontAwesomeIcon icon="chevron-down" />}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-16">
            <div className="WorkHeader__cover">
              <div className="WorkHeader__coverContainer">
                <Image image={image} className="WorkHeader__image" />
                <div
                  className="WorkHeader__glow"
                  style={{
                    /* stylelint-disable-next-line value-keyword-case */
                    '--background': `url(${underlayImageUrl})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  client: PropTypes.arrayOf(PropTypes.shape({})),
  date: PropTypes.string,
  title: PropTypes.arrayOf(PropTypes.shape({})),
  tagline: PropTypes.string,
  image: PropTypes.shape({
    xs: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
};

Header.defaultProps = {
  client: [],
  date: '',
  title: [],
  tagline: '',
  image: {},
};

export default Header;
