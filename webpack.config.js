const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: [
            './resources/index.js',
        ],
        vendor: [
            "react",
            "react-dom",
            "react-router"
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    devServer: {
        historyApiFallback: true,
        publicPath: "http://localhost:8080/public/",
        port: 12345,
        contentBase: path.join(__dirname, "./"),
        hot: true
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};