const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => (
  {
    entry: ['./src/app.jsx'],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }, {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
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
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'weather-react',
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
      historyApiFallback: true
    }
  }
)
