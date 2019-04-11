const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client/index.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
};
