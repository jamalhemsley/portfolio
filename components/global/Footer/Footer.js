import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import { htmlSerializer, textFormat } from 'utils';
import { Button, ButtonGroup } from 'components/standard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.scss';

const Footer = ({ title, text, author, repository, socialProfiles }) => {
  let email = '';

  if (socialProfiles) {
    email = socialProfiles.find((profile) => profile.type === 'Email').name;
  }

  // Get the current year for the copyright.
  const date = new Date().getFullYear();

  return (
    <footer className={styles.Footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-16'>
            <div className={styles.Footer__main}>
              <div className='row'>
                <div className='col-14 offset-1 col-md-12 offset-md-2 col-xl-10 offset-xl-3 col-xxl-8 offset-xxl-4'>
                  <div>
                    {title && (
                      <h2
                        className={`text-gradient-primary display-4 ${styles.Footer__title}`}>
                        {textFormat(title)}
                      </h2>
                    )}

                    {text && (
                      <div className={styles.Footer__text}>
                        <RichText
                          render={text}
                          linkResolver={linkResolver}
                          htmlSerializer={htmlSerializer}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {email && (
                <div className='row'>
                  <div className='col-14 offset-1'>
                    <ButtonGroup className={styles.Footer__actions}>
                      <Button
                        isLink={true}
                        isBlank={true}
                        link={`mailto:${email}`}
                        icon={<FontAwesomeIcon icon={faPaperPlane} size='lg' />}
                        size='lg'
                        style='icon'
                      />
                    </ButtonGroup>
                  </div>
                </div>
              )}
            </div>
            {author || repository ? (
              <div className={styles.Footer__credits}>
                {author && (
                  <p
                    key='footerCredit-author'
                    className={styles.Footer__author}>
                    &copy; {date} {textFormat(author)}.
                  </p>
                )}

                {repository && (
                  <a
                    key='footerCredit-source'
                    className={styles.Footer__source}
                    href={repository}
                    target='_blank'
                    title='View the Source on Github'
                    rel='noopener'>
                    <span>Source on Github</span>
                    <FontAwesomeIcon icon={faGithubAlt} size='lg' />
                  </a>
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
  text: PropTypes.array,
  author: PropTypes.string,
  repository: PropTypes.string,
  socialProfiles: PropTypes.array,
};

export default Footer;
