const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");
const HTMLPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        port: 3000,
    },
    mode: 'development',
    plugins: [
        new HTMLPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {url: false, sourceMap: true}
                    }
                    , {
                        loader: "sass-loader",
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {outputPath: 'assets/images', publicPath: '../images', useRelativePaths: true}
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {outputPath: 'assets/fonts', publicPath: '../fonts', useRelativePaths: true}
            }

        ]
    }
}
