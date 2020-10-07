const path = require('path');
const nodeExternals = require('webpack-node-externals');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

const client = {
  mode: process.env.NODE_ENV || 'development',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-env')
            ]
          }
        }
      },
      {
        test: /\.styl$/, 
        use: [
          MiniCssExtractPlugin.loader, "css-loader","stylus-loader"
        ] 
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
            filename: "css/[name].css"
    })
  ] 
}

const server = {
  entry: './server/server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-env')
            ]
          }
        }
      },
      {
        test: /\.styl$/, 
        use: [
          MiniCssExtractPlugin.loader, "css-loader","stylus-loader"
        ] 
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
            filename: "css/[name].css"
    })
  ] 
};

module.exports = [client, server];