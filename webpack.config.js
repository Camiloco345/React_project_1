const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    mode: 'development',

    resolve: {
        extensions: ['.js', '.jsx']
    },


//Modules Section    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                    loader: 'html-loader',
                }
            ]
            },
            {
                test: /\.css|scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.png|.jpg$/,
                type: 'assets/resource'
            }
        ]
    },

//Plugins section    
    plugins:[
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new miniCssExtractPlugin({
            filename: '[name].css',
        }),
        ],

//DevServer Section        
        devServer:{
            static: {
                directory: path.join(__dirname, 'public'),
                },
              compress: true,
              port: 3005,
            }        
    
}