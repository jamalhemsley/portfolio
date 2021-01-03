import { textFormat } from './textFormat';

// Add a unique key to props.
const propsWithUniqueKey = (props, key) => Object.assign(props || {}, { key });

// HTML serializer to customize Prismic RichText output.
export const htmlSerializer = function (type, element, content, children, key) {
  var props = {};

  // Loop through arrays to convert quotes in strings to smart quotes.
  children.forEach((child, index) => {
    if (typeof child[0] === 'string') children[index][0] = textFormat(child[0]);

    // Handle elements containing <span> tags.
    if (
      typeof child === 'object' &&
      Object.prototype.toString.call(child) === '[object Object]' &&
      child.type === 'span'
    ) {
      child.props.children.forEach((subChild, index) => {
        if (typeof subChild[0] === 'string')
          child.props.children[index][0] = textFormat(subChild[0]);
      });
    }
  });

  // Switch case here...
};

export default htmlSerializer;
