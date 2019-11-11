const webpack = require('webpack');
const dotenv = require('dotenv').config();
const expand = require('dotenv-expand');

expand(dotenv);

const DotEnvExtended = new webpack.DefinePlugin({
  process: {
    env: JSON.stringify(process.env),
  },
});

module.exports = DotEnvExtended;
