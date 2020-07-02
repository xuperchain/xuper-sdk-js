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
const clientConf = {
    entry: {
        xuper: './src/index.ts',
        'xuper.min': './src/index.ts'
    },
    target: 'web',
    output: {
        path: path.join(process.cwd(), 'lib'),
        filename: '[name].js',
        library: 'Xuper',
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
    }
};

const serverConf = {
    entry: {
        index: './src/index.ts'
    },
    target: 'node',
    output: {
        path: path.join(process.cwd(), 'lib'),
        filename: '[name].node.js',
        library: 'Xuper',
        libraryTarget: 'umd'
    },
    mode: 'production',
    plugins: [new CleanWebpackPlugin({})]
};

module.exports = [
    merge(commonConf, clientConf),
    merge(commonConf, serverConf)
];
