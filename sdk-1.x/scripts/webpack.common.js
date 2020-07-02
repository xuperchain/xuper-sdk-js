/**
 * @file (webpack.common)
 * Created by xinyi on 2019/12/5
 */
/* eslint-disable quote-props */

// webpack conf
module.exports = {
    module: {
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
    }
};
