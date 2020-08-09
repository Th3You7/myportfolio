const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  //setting the mode
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  //using optimization will override the production mode default options
  optimization: {
    minimizer: [
      //uglifying the assets:
      //css
      new OptimizeCssAssetsPlugin(),
      //js
      new TerserPlugin(),
      //html
      new HtmlWebpackPlugin({
        //title: give a title
        filename: "index.html",
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css file into /dist
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
});
