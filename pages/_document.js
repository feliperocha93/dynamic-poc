import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppHead extends Head {
  getDynamicChunks(files) {
    const dynamicScripts = super.getDynamicChunks(files);
    try {
      // get chunk manifest from loadable
      const loadableManifest = __non_webpack_require__(
        '../../react-loadable-manifest.json'
      );

      // search and filter modules based on marker ID
      const chunksToExclude = Object.values(loadableManifest).filter(
        (manifestModule) =>
          manifestModule?.files[0]?.includes?.('lazy') || false
      );
      const excludeMap = chunksToExclude?.reduce?.((acc, chunks) => {
        if (chunks.files) {
          acc.push(...chunks.files);
        }
        return acc;
      }, []);
      const filteredChunks = dynamicScripts?.filter?.(
        (script) => !excludeMap?.includes(script?.key)
      );

      return filteredChunks;
    } catch (e) {
      // if it fails, return the dynamic scripts that were originally sent in
      return dynamicScripts;
    }
  }
}

export default class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <Main />
        <NextScript />
      </Html>
    );
  }
}
