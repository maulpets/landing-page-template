const metatags = require('./src/pages/meta-tags.json');
const headerLinks = require('./src/pages/header-links.json');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require('html-webpack-template');


module.exports = {
  entry: ['./src/maulpets.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { //SASS - START loader to process cool sass to lame-o css3
       test: /\.scss$/,
       use: [   MiniCssExtractPlugin.loader,
               // {
               // loader: "style-loader" // creates style nodes from JS strings
               // },
               {
               loader: "css-loader" // translates CSS into CommonJS
               },
               {
               loader: "sass-loader", //compiles css form sasss
               options: {
                   includePaths: ["./src/styles"] }
               }
           ]
       }, //SASS - END loader,
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
          'file-loader'
          ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
         // Required
         inject: false,
         template: 'src/index.ejs',
         filename: 'index.html',
         // outputRoot: 'http://aodtest.infotronics.com/',
         googleAnalytics: {
           trackingId: 'UA-84943447-5',
           pageViewOnLoad: true
         },
         meta: metatags,
         mobile: true,
         lang: 'en-US',
         links: headerLinks,
         pageID: 'landing-page',
         preLoader: true,
         searchBar: false,
         navigationBar: false,
         footer: true,
         // inlineManifestWebpackName: 'webpackManifest',
         scripts: [
              // {
              //   src: '',
              //   integrity: 'sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk',
              //   crossorigin: "anonymous"
              // }
          ],
         title: 'Landing Page'
       }),
    new MiniCssExtractPlugin({
      // filename: "[name].css",
      // chunkFilename: "[id].css"
    })
  ]
};
