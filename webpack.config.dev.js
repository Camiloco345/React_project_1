const { path } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'Bundle.js',
    },

    resolve: {
        extension: ['.js', '.jsx']
    },

//Seccion de MODULOS
    module:{
        //Seccion de REGLAS
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            }
        ]
    },
    //Seccion de PLUGINS
    plugins:[
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
    //dervServer    
    devServer: {
        static:{
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3006 
    },
}