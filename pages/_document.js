import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { PrismicScript } from 'utils';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/logo.svg' type='image/svg+xml' />
          <link rel='stylesheet' href='/fonts/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <PrismicScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
