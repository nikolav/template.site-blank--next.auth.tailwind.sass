import Document, { Html, Head, Main, NextScript } from "next/document";

class Doc extends Document {
  render() {
    return (
      <Html>
        <Head>{/* // global, meta... */}</Head>
        <body>
          <div id="overlays--mdozwrwqvef" />
          <Main />
          <div id="overlays-end--mdozwrwqvef" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
