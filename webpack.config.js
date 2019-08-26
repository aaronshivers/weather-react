const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => (
  {
    entry: ['react-hot-loader/patch', './src/app.jsx'],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              'react-hot-loader/babel'
            ]
          }
        }, {
          test: /\.s?css$/,
          use: [
            {
            //   loader: MiniCssExtractPlugin.loader
            // }, {
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }, {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader'
            }
          ]
        }, {
          test: /\.ttf$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'weather',
        meta: {
          viewport: 'width=device-width, initial-scale=1'
        }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilemane: '[id].css'
      }),
      new Dotenv()
    ],
    devtool: env === 'production' ? 'source-map' : 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true
    }
  }
)
