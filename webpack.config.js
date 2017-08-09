var webpack = require("webpack");
var path=require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
  entry:{
    "index":"./src/js/index.js"
  },
  output:{
    path:path.resolve(__dirname ,"./dist"),
    filename:"js/[name].js",
    //publicPath: "./"
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "./node_modules/"),
        include: path.resolve(__dirname, "./src/"),
        use: {
          loader: "babel-loader",
          options:{
            presets: ['env']
             //presets: ['es2015','react']

          }
        }

      },
      {
        test: /\.html$/,
        use:{
          loader:"html-loader"
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: "index.html",
      template:"./src/index.html",
      //inject:'head'
      inject:"body"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    //contentBase: path.join(__dirname, "dist"),
    //compress: true,
    port: 8080,
    inline:true,
    hot:true,
    host:"0.0.0.0"
  },
}
