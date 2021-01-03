import { default as smartquotes } from 'smartquotes';

// Convert all quotes to smartquotes.
export const textFormat = (text) => {
  if (text) {
    const smartText = smartquotes(text);

    return smartText;
  }

  return null;
};

export default textFormat;
