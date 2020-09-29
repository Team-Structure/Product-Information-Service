const path = require('path');

const src = path.join(__dirname, '/client/src');
const dist = path.join(__dirname, '/client/dist');
const node = path.join(__dirname, 'node_modules');

module.exports = {
  entry: `${src}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: dist,
  },
  resolve: {
    modules: [node, 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: src,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
