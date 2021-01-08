import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { PrismicScript } from 'utils/prismic';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          <meta name="theme-color" content="#535365" key="meta_theme_color" />
          <link
            rel="preload"
            href="/fonts/MessinaSans/MessinaSans-Black.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/MessinaSans/MessinaSans-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/MessinaSans/MessinaSans-Book.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <PrismicScript />
          <script />
        </body>
      </Html>
    );
  }
}
