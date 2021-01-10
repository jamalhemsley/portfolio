import smartquotes from 'smartquotes';

// HTML serializer to customize Prismic RichText output.
const renderHtml = (type, element, content, children) => {
  /* eslint-disable no-param-reassign */
  // Loop through arrays to convert quotes in strings to smart quotes.
  children.forEach((child, index) => {
    if (typeof child[0] === 'string')
      children[index][0] = smartquotes(child[0]);

    // Handle elements containing <span> tags.
    if (
      typeof child === 'object' &&
      Object.prototype.toString.call(child) === '[object Object]' &&
      child.type === 'span'
    ) {
      child.props.children.forEach((subChild, subIndex) => {
        if (typeof subChild[0] === 'string')
          child.props.children[subIndex][0] = smartquotes(subChild[0]);
      });
    }
  });
  /* eslint-enable no-param-reassign */
};

export default renderHtml;
