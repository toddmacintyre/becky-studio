const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

module.exports = (env = {}) => {
  const config = {
    mode: env.prod ? 'production' : 'development',
    entry: {
      app: './src/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: './dist',
      open: true,
      hot: true,
      https: true,
      host: 'localhost',
      port: 8080,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    devtool: 'inline-source-map',
    resolve: {
      modules: [resolve(__dirname, 'node_modules')],
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new ProgressBarPlugin(),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: env.prod ? '[name].[hash].css' : '[name].css',
        chunkFilename: env.prod ? '[id].[hash].css' : '[id].css',
      }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            env.prod ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };

  if (env.debug) {
    console.log(config); // eslint-disable-line
    debugger // eslint-disable-line
  }
  return config;
};
