import React from 'react';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import theme from '../styles/theme';

// this file exists to fix material-ui styles
// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }


// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
static async getInitialProps(
  ctx: DocumentContext   
  
): Promise<DocumentInitialProps>{
  const sheet = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
    });
  }

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheet.getStyleElement()],
  };
} finally {
  sheet.seal()
}
};
};
