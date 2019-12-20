/**
 * @file (webpack.common)
 * Created by xinyi on 2019/12/5
 */

// webpack conf
module.exports = {
    entry: {
        index: './src/index.ts',
        'index.min': './src/index.ts'
    },
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
    },
    externals: {
        'bn.js': 'bn.js',
        'sha256': 'sha256',
        'elliptic': 'elliptic',
        'ripemd160-min/dist-umd': 'ripemd160-min/dist-umd',
        'pbkdf2': 'pbkdf2'
    }
};
