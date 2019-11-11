const HTMLWebpackPlugin = require('html-webpack-plugin');
const DotEnvExtendedPlugin = require('./config/webpack.plugin.dotenv-extended');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    DotEnvExtendedPlugin,
  ],
  devServer: {
    proxy: {
      '/api': process.env.SERVER || 'http://localhost:3000',
    },
  },
};
