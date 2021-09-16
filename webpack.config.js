const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

require('dotenv').config();

const isDev = ( process.env.ENV === 'development' );
const entry = ['./src/frontend/index.js'];

if ( isDev ) {
    entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true');
};

module.exports = {
    entry,
    mode: process.env.ENV,
    output: {
        path: path.resolve(__dirname, 'src/server/public'),
        filename: 'assets/app.js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        minimize: true,
        minimizer:  [ new TerserPlugin() ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|gif|jpg)$/,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {  
        historyApiFallback: true,  
    },
    plugins: [
        isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
        isDev ? () => {} : new CompressionWebpackPlugin({
            test: /\.js$|\.css$/,
            filename: '[path][base].gz',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/app.css',
        }),
    ],
};
