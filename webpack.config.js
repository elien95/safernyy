var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry:  {
    app:'./src/index.js'
  },

  output: {
    path: path.join(__dirname, "/dist"),
    publicPath:'',
    filename: "main.js"
  },


  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
   // compress: true,
   writeToDisk: true,
   open:true,
   port: 58134,
  },
  module: {
    rules: [
      
      
      {//require("expose-loader?jquery!jquery"),
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },

      { //  /\.css$/,
        test: /\.(sa|sc|c)ss$/,  
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath:'../'
            }
            
          },
          "css-loader",
        'sass-loader',
         
          /*{
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
              },
            },
          },  */
        ],
    },

    {
      test: /\.(png|svg|jpe?g|gif)$/,
      use: [
        {
          loader: "file-loader", 
          options: {
            name: '[name].[ext]',
            outputPath: "images",
          }
        }
      ]
    },

    {
      test: /\.(svg|eot|woff|woff2|ttf)$/,
      use: [
        {
          loader: "file-loader", 
          options: {
            name: '[name].[ext]',
            outputPath: "fonts",
            esModule: false,
          }
        }
      ]
    },



      {
        test: /\.html$/,
        use:[
          {
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
    ]
      },
  
      
     
    ],
},
    
   

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", 
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "toursTourkey.html", 
      template: "./src/toursTourkey.html",
    }),
    new HtmlWebpackPlugin({
      filename: "toursEygpt.html", 
      template: "./src/toursEygpt.html",
    }),
  
    new HtmlWebpackPlugin({
      filename: "registeraccount.html", 
      template: "./src/registeraccount.html",
    }),
    new HtmlWebpackPlugin({
      filename: "registerinto.html", 
      template: "./src/registerinto.html",
    }),
    new MiniCssExtractPlugin({filename:"css/style.css"}),

    new OptimizeCssAssetsPlugin({}),
  ],
};