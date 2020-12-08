const path = require('path');

const title = path.join(__dirname, '/client/src/title_app.jsx');
const specs = path.join(__dirname, '/client/src/specs_app.jsx');
const description = path.join(__dirname, '/client/src/description_app.jsx');
const dist = path.join(__dirname, '/client/dist');
const node = path.join(__dirname, 'node_modules');
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');

module.exports = {
  entry: {
    title,
    description,
    specs,
  },
  output: {
    filename: '[name].js',
    path: dist,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    modules: [node, 'node_modules'],
    alias: {
      'styled-components': path.resolve(node, 'styled-components'),
    },
  },
  plugins: [
    new BrotliGzipPlugin({
      asset: '[path].br[query]',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      quality: 11,
    }),
    new BrotliGzipPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react',
            '@babel/preset-env'],
        },

      },
    ],
  },
};
