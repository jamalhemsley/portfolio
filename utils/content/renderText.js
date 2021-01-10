import React from 'react';
import { RichText } from 'prismic-reactjs';
import smartquotes from 'smartquotes';
import { linkResolver } from 'config/prismic';
import renderHtml from './renderHtml';

// Convert all quotes to smartquotes.
const renderText = (text, asText = false) => {
  if (text) {
    // If it's a string, proceed.
    if (typeof text === 'string') return smartquotes(text);

    // Use RichText if it's an array (as text).
    if (asText && Array.isArray(text)) {
      return smartquotes(RichText.asText(text));
    }

    return (
      <RichText
        render={text}
        linkResolver={linkResolver}
        htmlSerializer={renderHtml}
      />
    );
  }

  return null;
};

export default renderText;
