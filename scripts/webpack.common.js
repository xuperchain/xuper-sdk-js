/**
 * @file (webpack.common)
 * Created by xinyi on 2019/12/5
 */
/* eslint-disable quote-props */

// webpack conf
module.exports = {
    module: {
        noParse: /@grpc|grpc-js|proto-loader/,
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    externals: {
        // 'bn.js': 'bn.js',
        // 'sha256': 'sha256',
        // 'elliptic': 'elliptic',
        // 'ripemd160-min/dist-umd': 'ripemd160-min/dist-umd',
        // 'pbkdf2': 'pbkdf2',
        // '@grpc/grpc-js': '@grpc/grpc-js',
        // '@grpc/proto-loader': '@grpc/proto-loader'
    }
};
