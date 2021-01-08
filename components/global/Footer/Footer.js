import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderText } from 'utils/content';
import { Button, ButtonGroup, SiteLink } from 'components/common';

import styles from './Footer.module.scss';

const Footer = ({ title, text, social, owner, repository }) => {
  // Get email for footer contact.
  let email = '';

  if (social) {
    email = social.find((profile) => profile.type === 'Email').name;
  }

  return (
    <footer id="footer" className={styles.Footer}>
      <div className="container">
        <div className="row">
          <div className="col-16">
            <div className={styles.Footer__main}>
              <div className="row">
                <div className="col-14 offset-1 col-md-12 offset-md-2 col-xl-10 offset-xl-3 col-xxl-8 offset-xxl-4">
                  <div>
                    {title && (
                      <h2
                        className={`text-gradient-primary display-4 ${styles.Footer__title}`}>
                        {renderText(title, true)}
                      </h2>
                    )}

                    {text && (
                      <div className={styles.Footer__text}>
                        {renderText(text)}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {email && (
                <div className="row">
                  <div className="col-14 offset-1">
                    <ButtonGroup className={styles.Footer__actions}>
                      <Button
                        label="Send a Message"
                        link={`mailto:${email}?subject="Hello! Let's Work Together."`}
                        icon={<FontAwesomeIcon icon="paper-plane" />}
                        size="lg"
                      />
                    </ButtonGroup>
                  </div>
                </div>
              )}
            </div>
            {owner || repository ? (
              <div className={styles.Footer__credits}>
                {owner && (
                  <p className={styles.Footer__owner}>
                    &copy; {new Date().getFullYear()} {renderText(owner)}.
                  </p>
                )}

                {repository && (
                  <SiteLink
                    link={repository}
                    className={styles.Footer__repository}>
                    <span>Source on Github</span>
                    <FontAwesomeIcon icon={['fab', 'github-alt']} size="lg" />
                  </SiteLink>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.shape({})),
  social: PropTypes.arrayOf(PropTypes.shape({})),
  owner: PropTypes.string,
  repository: PropTypes.shape({}),
};

Footer.defaultProps = {
  title: '',
  text: [],
  social: [],
  owner: '',
  repository: {},
};

export default Footer;
