/**
 * @author Luciano Graziani @lgraziani2712
 * @license {@link http://www.opensource.org/licenses/mit-license.php|MIT License}
 *
 */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Exclude node_modules from the bundle
 * @see https://github.com/liady/webpack-node-externals for a more complete solution
 */
const externals = fs.readdirSync('node_modules')
                    .filter((x) => (['.bin'].indexOf(x) === -1))
                    .map((mod) => ({
                      [mod]: `commonjs ${mod}`,
                    }));
const pathsToClean = ['../build'];

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/poll?1000',
    './dev-elements/hrm-loader',
  ],
  externals,
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'backend.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(pathsToClean),
  ],
  resolve: {
    extensions: ['.js'],
  },
  target: 'node',
};
