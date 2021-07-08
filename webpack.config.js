const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
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
    },
    plugins: [new webpack.ProvidePlugin({
    }), new MiniCssExtractPlugin()],
};
