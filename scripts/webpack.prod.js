/**
 * @file (webpack.prod)
 * Created by xinyi on 2019/12/5
 */

const path = require('path');
const merge = require('webpack-merge');
const commonConf = require('./webpack.common.js');

// plugins
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// webpack conf
const prodConf = {
    output: {
        path: path.join(process.cwd(), 'lib'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    mode: 'production',
    optimization: {
        nodeEnv: 'production',
        minimizer: [
            new TerserPlugin({
                test: /\.min/i,
                parallel: true,
                cache: true,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    plugins: [new CleanWebpackPlugin({})]
};

module.exports = merge(commonConf, prodConf);
