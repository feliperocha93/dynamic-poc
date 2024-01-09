import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppHead extends Head {
  getDynamicChunks(files) {
    const dynamicChunks = super.getDynamicChunks(files);

    console.log({ dynamicChunks });

    // Filtra os chunks que não têm o prefixo desejado
    return dynamicChunks.filter(({ key }) => !key.includes('lazy_'));
  }
}

export default class AppDocument extends Document {
  render() {
    return (
      <Html>
        <AppHead />
        <Main />
        <NextScript />
      </Html>
    );
  }
}
