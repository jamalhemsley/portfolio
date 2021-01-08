import React from 'react';
import PropType from 'prop-types';
import { renderText } from 'utils/content';
import Image from './Image/Image';

import styles from './ImageGrid.module.scss';

export const ImageGrid = ({ data, className }) => {
  const { items: images } = data;

  if (data) {
    return (
      <section className={`${className} ${styles.ImageGrid}`}>
        <div className="container">
          <div className="row">
            {images.map((image, index) => {
              const key = `image-${index}`;

              return (
                <figure
                  key={key}
                  className={`${
                    image.image_width === 'Full' ? 'col-16' : 'col-16 col-lg-8'
                  }  ${styles.ImageGrid__container}`}>
                  <Image
                    image={image.image}
                    width={image.image_width}
                    className={styles.ImageGrid__image}
                  />

                  {image.show_caption && image.image.copyright ? (
                    <figcaption className={styles.ImageGrid__caption}>
                      {renderText(image.image.copyright, true)}
                    </figcaption>
                  ) : null}
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return null;
};

ImageGrid.propTypes = {
  data: PropType.shape({
    items: PropType.arrayOf(PropType.shape({})),
  }),
  className: PropType.string,
};

ImageGrid.defaultProps = {
  data: {},
  className: '',
};

export default ImageGrid;
