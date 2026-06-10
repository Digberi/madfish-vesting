const webpack = require("webpack");

// webpack 5 no longer ships node core polyfills; taquito/beacon need these in the browser
module.exports = {
  webpack: {
    configure: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        assert: require.resolve("assert/"),
        buffer: require.resolve("buffer/"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util/"),
        fs: false,
        http: false,
        https: false,
        net: false,
        os: false,
        path: false,
        tls: false,
        url: false,
        vm: false,
        zlib: false,
      };
      config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser.js",
        })
      );
      // beacon/walletconnect dists ship broken source map references
      config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        /Failed to parse source map/,
      ];
      return config;
    },
  },
};
