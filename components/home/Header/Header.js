import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import { htmlSerializer, textFormat } from 'utils';
import { Button, ButtonGroup } from 'components/standard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

const Header = ({ author, title, tagline, buttonLabel, socialProfiles }) => {
  let email = '';

  if (socialProfiles) {
    email = socialProfiles.find((profile) => profile.type === 'Email').name;
  }

  return (
    <section className='section'>
      <div className='container'>
        <div className='row'>
          <div className='col-14 offset-1'>
            {author && (
              <span className={`lead ${styles.Header__author}`}>
                {textFormat(author)}
              </span>
            )}

            {title && (
              <h1
                className={`display-1 text-gradient-primary ${styles.Header__title}`}>
                {textFormat(title)}
              </h1>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-12 offset-1 col-md-10 col-lg-10 col-xl-9'>
            {tagline && (
              <div
                className={`lead-lg text-standard ${styles.Header__tagline}`}>
                <RichText
                  render={tagline}
                  linkResolver={linkResolver}
                  htmlSerializer={htmlSerializer}
                />
              </div>
            )}
          </div>
        </div>

        {buttonLabel && email && (
          <div className='row'>
            <div className='col-14 offset-1'>
              <ButtonGroup className={styles.Header__actions}>
                <Button
                  isLink={true}
                  label={buttonLabel}
                  link={`mailto:${email}`}
                  icon={<FontAwesomeIcon icon={faPaperPlane} size='lg' />}
                  size='lg'
                />
              </ButtonGroup>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

Header.propTypes = {
  author: PropTypes.string,
  buttonLabel: PropTypes.string,
  socialProfiles: PropTypes.array,
  title: PropTypes.string,
  tagline: PropTypes.array,
};

export default Header;
