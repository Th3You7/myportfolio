const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  //setting the mode
  mode: "development",
  //using sourcemap, actually there are multiple options
  devtool: "cheap-module-eval-source-map",
  //setting the webpack dev server options
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    //updating without reloading
    hot: true,
    //writeToDisk: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    pathinfo: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // my src html template
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        //here I dont split my css cause it consumes much time while developing
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
});
